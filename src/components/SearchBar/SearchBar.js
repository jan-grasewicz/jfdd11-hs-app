import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import AdvancedSearch from "../AdvancedSearch";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import "./SearchBar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { withHamburgerMenu } from "../../contexts/HamburgerMenu/HamburgerMenuContext";

class SearchBar extends Component {
  handleChange = event => {
    const { handleInput } = this.props.advancedSearchContext;
    handleInput(event.target.value);
  };

  render() {
    const {
      isAdvancedSearchOpen,
      advancedSearchToggle,
      handleAdvancedSearchToggle
    } = this.props.hamburgerContext;
    const { searchPhrase } = this.props.advancedSearchContext;
    return (
      <>
        <HamburgerMenu />
        <div className="SearchBar-wrapper">
          <input
            className="SearchBar"
            type="text"
            placeholder="Where do you want to drink?"
            value={searchPhrase}
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
          <div className="SearchBar-advanced-search-icon">
            <FontAwesomeIcon icon={faCog} onClick={advancedSearchToggle} />
            <div
              className="SearchBar-advanced-search-container"
              onClick={handleAdvancedSearchToggle}
            >
              {isAdvancedSearchOpen ? <AdvancedSearch /> : false}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAdvancedSearch(withHamburgerMenu(SearchBar));
