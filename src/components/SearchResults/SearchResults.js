import React, { Component } from "react";

import "./SearchResults.css";
import SearchBar from "../SearchBar/SearchBar";
import Publist from "../Publist";

class SearchResults extends Component {
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
    console.log(this.state.publist);
    return (
      <div>
        <SearchBar>
          {searchPhrase => (
            <div className="SearchResults-list">
              <Publist
                publistdata={this.state.publist.filter(pub =>
                  pub.city
                    .toLocaleLowerCase()
                    .includes(searchPhrase.toLocaleLowerCase())
                )}
              />
            </div>
          )}
        </SearchBar>
      </div>
    );
  }
}

export default SearchResults;
