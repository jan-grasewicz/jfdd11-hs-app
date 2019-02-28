import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../SideMenu";
import AdvancedSearch from "../AdvancedSearch";

import "./SearchBar.css";


class SearchBar extends Component {
  state = {
    isMenuOpen: false,
    isAdvancedSearchOpen: false,
    searchPhrase: ""
  };

  sideMenuToggle = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  AdvanceSearchToggle = () => {
    this.setState({
      isAdvancedSearchOpen: !this.state.isAdvancedSearchOpen
    });
  };

  handleClickMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  // handleClickAdvancedSearch = () => {
  //   this.setState({ isAdvancedSearchOpen: true });
  // };

  componentDidMount() {
    window.addEventListener("click", this.handleClickMenu);
    window.addEventListener("click", this.handleClickAdvancedSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickMenu);
    window.addEventListener("click", this.handleClickAdvancedSearch);
  }

  handleMenuToggle = event => {
    event.stopPropagation();
    this.sideMenuToggle();
  };

  // handleAdvancedSearchToggle = event => {
  //   event.stopPropagation();
  //   this.AdvanceSearchToggle();
  // };

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
          <div
            className={
              this.state.isMenuOpen
                ? "SearchBar-side-menu show"
                : "SearchBar-side-menu hide"
            }
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
            // onFocus={() => this.setState({ isMenuOpen: false })}
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
          <div className="SearchBar-advanced-search-icon">
            <FontAwesomeIcon
              icon={faCog}
              onClick={this.AdvanceSearchToggle}
            />
            <div className='SearchBar-advanced-search-container'>
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
