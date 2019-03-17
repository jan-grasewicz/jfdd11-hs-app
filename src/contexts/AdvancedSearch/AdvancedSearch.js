import React, { Component } from "react";
import firebase from "firebase";
export const AdvancedSearchContext = React.createContext({ publist: [] });
const { Provider, Consumer } = AdvancedSearchContext;

const initialFilterState = {
  filteredPubList: [],
  city: "all",
  cout: 5,
  openedFrom: "all",
  openedTill: "all",
  searchPhrase: ""
};

export default class AdvancedSearchProvider extends Component {
  state = {
    publist: [],
    users: [],
    filteredPubList: [],
    city: "all",
    cout: 5,
    openedFrom: "all",
    openedTill: "all",
    searchPhrase: "",
    reservations: [],
    resetFilters: () => {
      this.setState({ ...initialFilterState });
    },
    updateState: (ajdi, newState) =>
      this.changeReservationState(ajdi, newState),
    pushReservation: (uid, placeId, resTime, places) => {
      this.placeReser(uid, placeId, resTime, places);
    },
    handleChange: event => {
      this.setState({ [event.target.name]: event.target.value });
    },
    pushFilteredPubList: newList => this.setState({ filteredPubList: newList }),
    pushFilters: (city, cout, openedFrom, openedTill) =>
      this.setState({ city, cout, openedFrom, openedTill }),
    handleInput: str => {
      this.setState({
        searchPhrase: str
      });
    }
  };

  placeReser = (uid, placeId, resTime, places) => {
    firebase
      .database()
      .ref("reservations")
      .push({
        placeId,
        userUid: uid,
        date: resTime,
        status: "pending",
        places
      });
  };

  fetchStuff = thing => {
    firebase
      .database()
      .ref(thing)
      .once("value")
      .then(snap => snap.val())
      .then(stuff => Object.entries(stuff).map(([id, val]) => ({ id, ...val })))
      .then(stuff => this.setState({ [thing]: stuff }));
  };

  changeReservationState = (ajdi, newState) => {
    firebase
      .database()
      .ref("reservations")
      .child(`${ajdi}`)
      .update({ status: newState });
  };

  componentDidMount() {
    this.fetchStuff("publist");
    this.fetchStuff("users");
    this.unsubscribe_users = firebase
      .database()
      .ref("/users")
      .on("child_added", snapshot => this.add);
    this.unsubscribe_res_add = firebase
      .database()
      .ref("/reservations")
      .on("child_added", snapshot =>
        this.addReservationToState(snapshot.val())
      );
    // this.unsubscribe_res_mod = firebase
    //   .database()
    //   .ref("/reservations")
    //   .on("child_changed", snapshot => console.log(snapshot.val()));
  }

  componentWillUnmount() {
    this.unsubscribe_res_add();
    // this.unsubscribe_res_mod();
  }

  addReservationToState = reserv => {
    this.setState({
      reservations: this.state.reservations.concat([
        { id: reserv.date, ...reserv }
      ])
    });
  };

  render() {
    // console.log(this.state);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withAdvancedSearch = Component => props => (
  <Consumer>
    {value => <Component {...props} advancedSearchContext={value} />}
  </Consumer>
);
