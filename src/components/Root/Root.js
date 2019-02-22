import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import SearchResults from "../SearchResults/SearchResults";

class Root extends Component {

  state = {
    publist: [],
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/publist.json").then(data => data.json()).then(publist => this.setState({ publist }))
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/publist" component={SearchResults} publist={this.state.publist} />
          <Route path="/publist/:pubID" />
        </div>
      </Router>
    );
  }
}

export default Root;
