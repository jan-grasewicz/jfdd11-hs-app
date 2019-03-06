import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchResults extends Component {
  listSearched = (list, searchPhrase) => {
    let newList = list.filter(
      pub =>
        pub.name
          .toLocaleLowerCase()
          .includes(searchPhrase.toLocaleLowerCase()) ||
        pub.city.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase())
    );
    return newList;
  };

  render() {
    let list =
      this.props.advancedSearchContext.filteredPubList.length > 0
        ? this.props.advancedSearchContext.filteredPubList
        : this.props.advancedSearchContext.publist;

    return (
      <div>
        <SearchBar>
          {searchPhrase => (
            <div className="SearchResults-list">
              <div className="AdvancedSearch-info">
                <p>Advanced search filtering</p><button>Reset Results</button>
              </div>
              <Publist publistdata={this.listSearched(list, searchPhrase)} />
            </div>
          )}
        </SearchBar>
      </div>
    );
  }
}

export default withAdvancedSearch(SearchResults);
