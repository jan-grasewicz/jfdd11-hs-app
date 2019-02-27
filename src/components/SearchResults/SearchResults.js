import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchResults extends Component {
  state = {
    publist: this.props.advancedSearchContext.publist,
    filteredpubs: null
  };

  componentDidMount() {
    this.setState({
      filteredpubs: this.props.filtered ? this.props.filtered : null
    });
  }

  render() {
    const publist = this.props.advancedSearchContext.publist;
    return (
      <div>
        <SearchBar>
          {searchPhrase => (
            <div className="SearchResults-list">
              <Publist
                publistdata={(this.state.filteredpubs || publist).filter(pub =>
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

export default withAdvancedSearch(SearchResults);
