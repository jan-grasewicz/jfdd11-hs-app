import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import SearchResults from "../SearchResults/SearchResults";
import PubScreen from "../PubScreen";
import AdvancedSearch from "../AdvancedSearch";

class Root extends Component {
  state = {
    publist: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/publist.json")
      .then(data => data.json())
      .then(stuff =>
        Object.entries(stuff).map(([id, value]) => ({ id, ...value }))
      )
      .then(publist => this.setState({ publist }));
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />

          <Route path="/advancedSearch" component={AdvancedSearch} />
          <Route
            exact
            path="/publist"
            component={props => (
              <SearchResults {...props} pubs={this.state.publist} />
            )}
          />
          <Route path="/publist/:pubId" component={PubScreen} />
        </div>
      </Router>
    );
  }
}

export default Root;
