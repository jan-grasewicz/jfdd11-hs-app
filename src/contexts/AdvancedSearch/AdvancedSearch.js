import React, { Component } from "react";

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
    filteredPubList: [],
    city: "all",
    cout: 5,
    openedFrom: "all",
    openedTill: "all",
    searchPhrase: "",
    resetFilters: () => {
      this.setState({ ...initialFilterState });
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

  componentDidMount() {

    fetch(process.env.PUBLIC_URL + "/data/publist.json")
      .then(data => data.json())
      .then(publist =>
        Object.entries(publist).map(([id, val]) => ({ id, ...val }))
      )
      .then(publist => this.setState({ publist }));
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
