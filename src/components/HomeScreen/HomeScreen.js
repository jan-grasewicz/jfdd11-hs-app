import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faChair,
  faSearch,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Brewio from "./img/brewio.svg";

import "./HomeScreen.css";


const LogInButton = () => {
  return (
    <NavLink to={'/login'} ><button className='HomeScreen-btn'>Log in</button></NavLink>
  )
}


const SignUpButton = () => {
  return (
    <NavLink to={'/signup'} ><button className='HomeScreen-btn'>Sign up</button></NavLink>
  ) 
}


class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <div className="HomeScreen-wrapper">
          <div className="HomeScreen-title">
            <img src={Brewio} style={{ width: "70px" }} alt="Logo" />
            <h1 className="HomeScreen-h1">Brewio</h1>
          </div>
          <p className="HomeScreen-p">Going out with friends? </p>
          <p className="HomeScreen-p">
            <span style={{ color: "#CAB67A", fontSize: "1.7rem" }}>Brewio</span>{" "}
            is here to help
          </p>
          <NavLink
            style={{ display: "flex", textDecoration: "none" }}
            to="/publist"
          >
            <button className="HomeScreen-btn-main">
              Where do you want to drink?
              <FontAwesomeIcon
                style={{ verticalAlign: "middle", marginLeft: "10px" }}
                icon={faBeer}
              />
            </button>
          </NavLink>
          <div className="HomeScreen-about-brewio">
            <div className="HomeScreen-about-block">
              <FontAwesomeIcon
                className="HomeScreen-about-block-icon"
                icon={faChair}
              />
              <p>Find pubs with enough space for all your friends</p>
            </div>
            <div className="HomeScreen-about-block">
              <FontAwesomeIcon
                className="HomeScreen-about-block-icon"
                icon={faSearch}
              />
              <p>Search for pubs from the place of your choosing</p>
            </div>
            <div className="HomeScreen-about-block">
              <FontAwesomeIcon
                className="HomeScreen-about-block-icon"
                icon={faClock}
              />
              <p>Avoid the hassle of calling places one by one</p>
            </div>
          </div>
        </div>
        <div className='HomeScreen-buttons'>
        <SignUpButton />
        <LogInButton />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
