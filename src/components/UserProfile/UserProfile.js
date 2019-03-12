import React, { Component } from "react";
import ProfileTabs from "../ProfileTabs";
import "./UserProfile.css";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

class UserProfile extends Component {
  render() {
    let { user, userData } = this.props.authContext;
    return (
      <div className='UserProfile-background'>
      <div className="UserProfile">
        <div className="UserProfile-data">
          <div className="UserProfile-img">
            <img alt="Profile" src="http://placeimg.com/120/160/people" />
          </div>
          <div className="UserProfile-info">
            <h2 className="UserProfile-name">{userData && userData.name}</h2>
            <h2>{userData && userData.surname}</h2>
            <p>e-mail: {user && user.email}</p>
            <p>phone: {userData && userData.phone}</p>
          </div>
          <button>edit</button>
        </div>
        
          <ProfileTabs />
        
      </div></div>
    );
  }
}

export default withAuth(UserProfile);
