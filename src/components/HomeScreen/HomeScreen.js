import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

import "./HomeScreen.css";

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <div className="HomeScreen-wrapper">
          <h1 className="HomeScreen-h1">Brewio</h1>
          <p className="HomeScreen-p">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </p>
          <NavLink
            style={{ display: "flex", textDecoration: "none" }}
            to="/publist"
          >
            <button className="HomeScreen-btn-main">
              Where do you want to drink?
              <FontAwesomeIcon
                style={{ verticalAlign: "middle", marginLeft: "20px" }}
                icon={faBeer}
                className="SearchBar-icon"
              />
            </button>
          </NavLink>

          <NavLink to="/advancedSearch" className="HomeScreen-btn">
            Zaawansowane
          </NavLink>

          <button className="HomeScreen-btn">Lokalizacja</button>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
