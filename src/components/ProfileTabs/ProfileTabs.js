import React, { Component } from "react";

import "./ProfileTabs.css";
import Reservations from "../Reservations";

class ProfileTabs extends Component {
  render() {
    return (
      <div className="ProfileTabs">
        <h2>ProfileTabs</h2>
        <button>Reservations</button>
        <button>My Pubs</button>
        <Reservations />
      </div>
    );
  }
}

export default ProfileTabs;
