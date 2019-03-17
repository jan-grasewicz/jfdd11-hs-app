import React, { Component } from "react";
import "./SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import {
  faUser,
  faHome,
  faBeer,
  faSignInAlt,
  faPlus,
  faMap
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
          <>
            <div className="SideMenu-profile-a">
              <NavLink to="/profile">
                <FontAwesomeIcon
                  icon={faUser}
                  className="SideMenu-icon-profile"
                />
                <p className="SideMenu-profile-p">My Profile</p>
              </NavLink>
              <button className="SideMenu-profile-button" onClick={signOut}>
                Sign Out
              </button>
            </div>
          </>
        )}
        <ul className="SideMenu-menu">
          <NavItem to="/" icon={faHome}>
            Home
          </NavItem>
          <NavItem to="/publist" icon={faBeer}>
            Pub list
          </NavItem>
          <NavItem to="/searchbylocal" icon={faMap}>
            Show map
          </NavItem>

          {(user === null && (
            <>
              <NavItem to="/login" icon={faSignInAlt}>
                Log in
              </NavItem>
              <NavItem to="/signup" icon={faSignInAlt}>
                Sign up
              </NavItem>
            </>
          )) || (
            <NavItem to="/add-pub" icon={faPlus}>
              Add Your Pub
            </NavItem>
          )}
        </ul>
      </div>
    );
  }
}

export default withAuth(SideMenu);
