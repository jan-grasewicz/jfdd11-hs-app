import React, { Component } from "react";
import ProfileTabs from "../ProfileTabs";
import "./UserProfile.css";
import { withAuth } from "../../contexts/AuthContext/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

class UserProfile extends Component {
  render() {
    let { user, userData } = this.props.authContext;
    return (
      <>
        <div className="menu-container">
          <HamburgerMenu />
        </div>
        <div className="UserProfile-background">
          <div className="UserProfile">
            <div className="UserProfile-data">
              <div className="UserProfile-img">
                <img alt="Profile" src="http://placeimg.com/120/160/people/5" />
              </div>
              <div className="UserProfile-info">
                <div className="UserProfile-fullname">
                  <h2 className="UserProfile-name">
                    {userData && userData.name + " "}
                  </h2>
                  <h2>{userData && userData.surname}</h2>
                </div>
                <p>e-mail: {user && user.email}</p>
                <p>phone: {userData && userData.phone}</p>
              </div>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="UserProfile-edit"
              />
            </div>

            <ProfileTabs />
          </div>
        </div>
      </>
    );
  }
}

export default withAuth(UserProfile);
