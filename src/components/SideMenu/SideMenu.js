import React, { Component } from "react";

import "./SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faUser,
  faHome,
  faBeer,
  faPassport,
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
    return (
      <div className='SideMenu'>
        <h1 className='SideMenu-h1'>Hello!</h1>
        <NavLink to="/" className='SideMenu-profile-a'>
          <FontAwesomeIcon icon={faUser} className="SideMenu-icon-profile" />
          <p className="SideMenu-profile-p">My Profile</p>
        </NavLink>
        <ul className="SideMenu-menu">
          <NavItem to="/" icon={faHome}>
            Home
          </NavItem>
          <NavItem to="/publist" icon={faBeer}>
            Pub List
          </NavItem>
          <NavItem to="/advancedSearch" icon={faPassport}>
            Advanced Search
          </NavItem>
          <NavItem to="/login" icon={faSignInAlt}>
            Log in
          </NavItem>
          <NavItem to="/signup" icon={faSignInAlt}>
            Sign up
          </NavItem>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
