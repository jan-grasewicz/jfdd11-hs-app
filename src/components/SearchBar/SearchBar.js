import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    isMenuOpen: false
  };

  sideMenuToggle = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  render() {
    return (
      <div className="SearchBar-wrapper">
        <div
          className={
            this.state.isMenuOpen
              ? "SearchBar-side-menu show"
              : "SearchBar-side-menu hide"
          }
        />
        <div onClick={() => this.sideMenuToggle()} className="SearchBar-menu">
          <FontAwesomeIcon icon={faBars} style={{ verticalAlign: "middle" }} />
        </div>
        <input
          className="SearchBar"
          type="text"
          placeholder="Where do you want to drink?"
          onFocus={() => this.setState({ isMenuOpen: false })}
        />
        <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
      </div>
    );
  }
}

export default SearchBar;
