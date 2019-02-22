import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../HomeScreen";

class Root extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/pub-list.json")
      .then(data => data.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/publist" publist={this.state.data} />
          <Route path="/publist/:pubID" />
        </div>
      </Router>
    );
  }
}

export default Root;
