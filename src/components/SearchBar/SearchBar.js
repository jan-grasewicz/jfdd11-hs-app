import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import AdvancedSearch from "../AdvancedSearch";

import "./SearchBar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { withHamburgerMenu } from "../../contexts/HamburgerMenu/HamburgerMenuContext";

class SearchBar extends Component {
  state = {
    searchPhrase: ""
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({
      searchPhrase: inputValue
    });
  };

  render() {
    const { isAdvancedSearchOpen, advancedSearchToggle, handleAdvancedSearchToggle } = this.props.hamburgerContext
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
            <FontAwesomeIcon icon={faCog} onClick={ advancedSearchToggle} />
            <div
              className="SearchBar-advanced-search-container"
              onClick={handleAdvancedSearchToggle}
            >
              {isAdvancedSearchOpen ? <AdvancedSearch /> : false}
            </div>
          </div>
        </div>

        {this.props.children(this.state.searchPhrase)}
      </>
    );
  }
}

export default withHamburgerMenu(SearchBar);
