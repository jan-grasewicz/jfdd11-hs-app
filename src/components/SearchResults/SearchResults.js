import React, { Component } from "react";

import "./SearchResults.css";
import SearchBar from "../SearchBar/SearchBar";

class SearchResults extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: this.props.publist
    })
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
