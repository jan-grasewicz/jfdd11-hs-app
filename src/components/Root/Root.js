import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import SearchResults from "../SearchResults/SearchResults";
import PubScreen from "../PubScreen";
import AdvancedSearch from "../AdvancedSearch";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class Root extends Component {
  state = {
    publist: []
  };

  componentDidMount() {
    this.setState({ publist: this.props.advancedSearchContext.publist });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />

          <Route path="/advancedSearch" component={AdvancedSearch} />
          <Route exact path="/publist" component={SearchResults} />
          <Route path="/publist/:pubId" component={PubScreen} />
        </div>
      </Router>
    );
  }
}

export default withAdvancedSearch(Root);
