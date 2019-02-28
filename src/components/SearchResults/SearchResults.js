import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchResults extends Component {
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
              <Publist
                publistdata={list.filter(pub =>
                  pub.name
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

export default withAdvancedSearch(SearchResults);
