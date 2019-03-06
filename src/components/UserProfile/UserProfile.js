import React, { Component } from "react";

import "./UserProfile.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

class UserProfile extends Component {
  render() {
    let { user } = this.props.authContext;
    console.log(user);
    return (
      <div className="UserProfile">
        <div className="UserProfile-">
          <h2>UserName</h2>
          <p>e-mail: {user && user.email}</p>
        </div>
      </div>
    );
  }
}

export default withAuth(withAdvancedSearch(UserProfile));
