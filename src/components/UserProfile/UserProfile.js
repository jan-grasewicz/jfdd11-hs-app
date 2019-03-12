import React, { Component } from "react";
import ProfileTabs from "../ProfileTabs";
import "./UserProfile.css";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

class UserProfile extends Component {
  render() {
    let { user, userData } = this.props.authContext;
    return (
      <div className="UserProfile">
        <div className="UserProfile-data">
          <img
            className="UserProfile-img"
            alt="Profile"
            src="http://placeimg.com/120/150/people"
          />
          <div className="UserProfile-info">
            <h2>{userData && userData.name}</h2>
            <h2>{userData && userData.surname}</h2>
            <p>e-mail: {user && user.email}</p>
            <p>phone: {userData && userData.phone}</p>
            <button>Edit profile</button>
          </div>
        </div>
        <div className="UserProfile-tabs">
          <ProfileTabs />
        </div>
      </div>
    );
  }
}

export default withAuth(UserProfile);
