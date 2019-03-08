import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchResults extends Component {
  listSearched = (list, searchPhrase) => {
    if (searchPhrase) {
      let newList = list.filter(
        pub =>
          pub.name
            .toLocaleLowerCase()
            .includes(searchPhrase.toLocaleLowerCase()) ||
          pub.city
            .toLocaleLowerCase()
            .includes(searchPhrase.toLocaleLowerCase())
      );
      return newList;
    } else {
      return list;
    }
  };

  render() {
    let {
      publist,
      searchPhrase,
      filteredPubList
    } = this.props.advancedSearchContext;

    return (
      <div>
        <SearchBar />
        <div className="SearchResults-list">
          <div className="AdvancedSearch-info">
            <p>
              Displaying{" "}
              {
                this.listSearched(
                  filteredPubList.length > 0 ? filteredPubList : publist,
                  searchPhrase
                ).length
              }{" "}
              out of {this.props.advancedSearchContext.publist.length} pubs
            </p>
            <button
              onClick={this.props.advancedSearchContext.resetFilters}
              className="reset-button"
            >
              Reset
            </button>
          </div>
          <Publist
            publistdata={this.listSearched(
              filteredPubList.length > 0 ? filteredPubList : publist,
              searchPhrase
            )}
          />
        </div>
      </div>
    );
  }
}

export default withAdvancedSearch(SearchResults);
