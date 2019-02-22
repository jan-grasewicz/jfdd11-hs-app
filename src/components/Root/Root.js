import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../HomeScreen";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/publist" />
          <Route path="/publist/:pubID" />
        </div>
      </Router>
    );
  }
}

export default Root;
