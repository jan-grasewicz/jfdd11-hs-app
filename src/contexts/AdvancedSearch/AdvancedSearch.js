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
    resetFilters: () => {
      this.setState({ ...initialFilterState });
    },
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

  componentDidMount() {
    this.fetchStuff("publist");
    this.fetchStuff("users");
  }

  render() {
    console.log(this.state);
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withAdvancedSearch = Component => props => (
  <Consumer>
    {value => <Component {...props} advancedSearchContext={value} />}
  </Consumer>
);
