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

  changeReservationState = (ajdi, newState) => {
    firebase
      .database()
      .ref("reservations")
      .child(`${ajdi}`)
      .update({ status: newState });
  };

  componentDidMount() {
    this.unsubscribe_publist = firebase
      .database()
      .ref("/publist")
      .on("value", snapshot => this.fixStuffToState(snapshot.val(), "publist"));
    this.unsubscribe_users = firebase
      .database()
      .ref("/users")
      .on("value", snapshot => this.fixStuffToState(snapshot.val(), "users"));
    this.unsubscribe_res = firebase
      .database()
      .ref("/reservations")
      .on("value", snapshot =>
        this.fixStuffToState(snapshot.val(), "reservations")
      );
  }

  fixStuffToState = (stuff, field) => {
    let stuffArr = Object.entries(stuff).map(([id, val]) => ({ id, ...val }));
    this.setState({ [field]: stuffArr });
  };

  componentWillUnmount() {
    this.unsubscribe_res();
    this.unsubscribe_publist();
    this.unsubscribe_users();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withAdvancedSearch = Component => props => (
  <Consumer>
    {value => <Component {...props} advancedSearchContext={value} />}
  </Consumer>
);
