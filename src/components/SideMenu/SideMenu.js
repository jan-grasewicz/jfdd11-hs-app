import React, { Component } from "react";

import "./SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import {
  faUser,
  faHome,
  faBeer,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ to, icon, children }) => (
  <li>
    <NavLink to={to} className="SideMenu-link">
      <div className="SideMenu-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{children}</p>
    </NavLink>
  </li>
);

class SideMenu extends Component {
  render() {
    let { user, signOut } = this.props.authContext;
    return (
      <div className="SideMenu">
        <h1 className="SideMenu-h1">
          <img
            src="../brewio.svg"
            style={{ width: "50px", verticalAlign: "sub" }}
            alt="brewio logo"
          />
          Brewio
        </h1>
        {user !== null && (
          <NavLink to="/profile" className="SideMenu-profile-a">
            <FontAwesomeIcon icon={faUser} className="SideMenu-icon-profile" />
            <p className="SideMenu-profile-p">My Profile</p>
            <button onClick={signOut}>Sign Out</button>
          </NavLink>
        )}
        <ul className="SideMenu-menu">
          <NavItem to="/" icon={faHome}>
            Home
          </NavItem>
          <NavItem to="/publist" icon={faBeer}>
            Pub List
          </NavItem>
          {user === null && (
            <>
              <NavItem to="/login" icon={faSignInAlt}>
                Log in
              </NavItem>
              <NavItem to="/signup" icon={faSignInAlt}>
                Sign up
              </NavItem>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default withAuth(SideMenu);
