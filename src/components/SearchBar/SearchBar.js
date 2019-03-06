import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import AdvancedSearch from "../AdvancedSearch";

import "./SearchBar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

class SearchBar extends Component {
  state = {
    isAdvancedSearchOpen: false,
    searchPhrase: ""
  };

  AdvanceSearchToggle = event => {
    event.stopPropagation();
    this.setState({
      isAdvancedSearchOpen: !this.state.isAdvancedSearchOpen
    });
  };

  handleClickAdvancedSearch = event => {
    this.setState({ isAdvancedSearchOpen: false });
  };

  componentDidMount() {
    window.addEventListener("click", this.handleClickAdvancedSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickAdvancedSearch);
  }

  handleAdvancedSearchToggle = event => {
    event.stopPropagation();
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({
      searchPhrase: inputValue
    });
  };

  render() {
    return (
      <>
        <div className="SearchBar-wrapper">
          <HamburgerMenu />
          <input
            className="SearchBar"
            type="text"
            placeholder="Where do you want to drink?"
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
          <div className="SearchBar-advanced-search-icon">
            <FontAwesomeIcon icon={faCog} onClick={this.AdvanceSearchToggle} />
            <div
              className="SearchBar-advanced-search-container"
              onClick={this.handleAdvancedSearchToggle}
            >
              {this.state.isAdvancedSearchOpen ? <AdvancedSearch /> : false}
            </div>
          </div>
        </div>

        {this.props.children(this.state.searchPhrase)}
      </>
    );
  }
}

export default SearchBar;
