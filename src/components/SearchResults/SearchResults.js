import React, { Component } from "react";

import "./SearchResults.css";
import Publist from "../Publist";
import SearchBar from "../SearchBar/SearchBar";

class SearchResults extends Component {
  state = {
    publist: this.props.pubs,
    filteredpubs: null
  };

  componentDidMount() {
    this.setState({
      filteredpubs: this.props.filtered ? this.props.filtered : null
    });
  }

  render() {
    console.log(this.state.publist);
    return (
      <div>
        <SearchBar>
          {searchPhrase => (
            <div className="SearchResults-list">
              <Publist
                publistdata={(
                  this.state.filteredpubs || this.state.publist
                ).filter(pub =>
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
