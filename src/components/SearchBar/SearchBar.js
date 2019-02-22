import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar-wrapper">
        <input
          className="SearchBar"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          type="text"
          placeholder="Where do you want to drink?"
        />
        <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
      </div>
    );
  }
}

export default SearchBar;
