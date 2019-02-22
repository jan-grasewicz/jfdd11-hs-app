import React, { Component } from "react";

import "./SearchResults.css";
import SearchBar from "../SearchBar/SearchBar";

class SearchResults extends Component {
  state = {
    data: []
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
      <>
        <SearchBar />
      </>
    );
  }
}

export default SearchResults;
