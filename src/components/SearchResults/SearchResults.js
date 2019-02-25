import React, { Component } from "react";

import "./SearchResults.css";
import SearchBar from "../SearchBar/SearchBar";
import Publist from "../Publist";

class SearchResults extends Component {
  state = {
    publist: this.props.pubs
  };

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
