import React, { Component } from "react";

import "./UserProfile.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

class UserProfile extends Component {
  render() {
    let { user, userData } = this.props.authContext;

    // console.log("adv", this.props.advancedSearchContext);
    console.log("auth", this.props.authContext);
    return (
      <div className="UserProfile">
        <div className="UserProfile-data">
          <img src="http://placeimg.com/200/250/people" />
          <div>
            <h2>{userData && userData.name}</h2>
            <h2>{userData && userData.surname}</h2>
            <p>e-mail: {user && user.email}</p>
          </div>
        </div>
        <div className="UserProfile-reservations" />
      </div>
    );
  }
}

export default withAuth(withAdvancedSearch(UserProfile));
