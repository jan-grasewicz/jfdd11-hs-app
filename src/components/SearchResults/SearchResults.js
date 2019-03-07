import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchResults extends Component {
  listSearched = (list, searchPhrase) => {
    console.log("list", list);
    console.log(this.props.advancedSearchContext);
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
      // console.log(newList);
      return newList;
    } else {
      return list;
    }
  };

  render() {
    let list = this.props.advancedSearchContext.publist;

    return (
      <div>
        <SearchBar />
        <div className="SearchResults-list">
          <Publist
            publistdata={this.listSearched(
              list,
              this.props.advancedSearchContext.searchPhrase
            )}
          />
        </div>
      </div>
    );
  }
}

export default withAdvancedSearch(SearchResults);
