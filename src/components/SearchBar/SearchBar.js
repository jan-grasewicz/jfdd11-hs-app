import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    isMenuOpen: false,
    searchPhrase: ''
  };

  sideMenuToggle = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  componentDidMount() {
    window.addEventListener('click', () => {
      this.setState({ isMenuOpen: false })
    })
  }

  handleMenuToggle = event => {
    event.stopPropagation()
    this.sideMenuToggle()
  }

  handleChange = event => {
    const inputValue = event.target.value
    this.setState({
      searchPhrase: inputValue
    })
  }

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
          />
          <div onClick={this.handleMenuToggle} className="SearchBar-menu">
            <FontAwesomeIcon icon={faBars} style={{ verticalAlign: "middle" }} />
          </div>
          <input
            className="SearchBar"
            type="text"
            placeholder="Where do you want to drink?"
            onFocus={() => this.setState({ isMenuOpen: false })}
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="SearchBar-icon" />
        </div>
        {this.props.children(this.state.searchPhrase)}
      </>
    );
  }
}

export default SearchBar;
