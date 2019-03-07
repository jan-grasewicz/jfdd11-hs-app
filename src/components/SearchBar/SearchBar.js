import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../SideMenu";
import AdvancedSearch from "../AdvancedSearch";

import "./SearchBar.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class SearchBar extends Component {
  state = {
    isMenuOpen: false,
    isAdvancedSearchOpen: false,
    animationEnabled: false
  };

  sideMenuToggle = () => {
    this.setState({
      animationEnabled: true,
      isMenuOpen: true,
      isAdvancedSearchOpen: false
    });
  };

  AdvanceSearchToggle = event => {
    event.stopPropagation();
    this.setState({
      isMenuOpen: false,
      isAdvancedSearchOpen: !this.state.isAdvancedSearchOpen
    });
  };

  handleClickMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  handleClickAdvancedSearch = () => {
    this.setState({ isAdvancedSearchOpen: false });
  };

  componentDidMount() {
    window.addEventListener("click", this.handleClickMenu);
    window.addEventListener("click", this.handleClickAdvancedSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickMenu);
    window.removeEventListener("click", this.handleClickAdvancedSearch);
  }

  handleMenuToggle = event => {
    event.stopPropagation();
    this.sideMenuToggle();
  };

  handleAdvancedSearchToggle = event => {
    event.stopPropagation();
    // this.AdvanceSearchToggle();
  };

  handleChange = event => {
    this.props.advancedSearchContext.handleInput(event.target.value);
  };

  render() {
    return (
      <>
        <div className="SearchBar-wrapper">
          <div
            className={`SearchBar-side-menu ${
              this.state.animationEnabled ? "animation-enabled" : ""
            } ${this.state.isMenuOpen ? "show" : "hide"}`}
          >
            {" "}
            <SideMenu />
          </div>
          <div onClick={this.handleMenuToggle} className="SearchBar-menu">
            <FontAwesomeIcon
              icon={faBars}
              style={{ verticalAlign: "middle" }}
            />
          </div>
          <input
            className="SearchBar"
            type="text"
            placeholder="Where do you want to drink?"
            value={this.props.advancedSearchContext.searchPhrase}
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
      </>
    );
  }
}

export default withAdvancedSearch(SearchBar);
