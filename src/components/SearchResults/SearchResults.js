import React, { Component } from "react";

import "./SearchResults.css";
import SearchBar from "../SearchBar/SearchBar";

class SearchResults extends Component {
  state = {
    publist: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/publist.json")
      .then(data => data.json())
      .then(stuff => Object.entries(stuff).map(([id, value]) => ({ id, ...value })))
      .then(publist => this.setState({ publist }))
  }

  render() {
    console.log(this.state.publist)
    return (
      <div className="searching-screen-wrapper">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="list-of-pubs">
          <ol>
            {
              this.state.publist.map(pub => (
                <li key={pub.id}>
                  {pub.name}
                </li>
              ))
            }
          </ol>
        </div>

      </div>);
  }
}

export default SearchResults;
