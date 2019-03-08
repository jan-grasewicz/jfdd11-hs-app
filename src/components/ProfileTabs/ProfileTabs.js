import React, { Component } from "react";

import "./ProfileTabs.css";
import Reservations from "../Reservations";

class ProfileTabs extends Component {
  state = {
    tab: "reservations"
  };
  render() {
    return (
      <div className="ProfileTabs">
        <h2>ProfileTabs</h2>
        <button onClick={() => this.setState({ tab: "reservations" })}>
          Reservations
        </button>
        <button onClick={() => this.setState({ tab: " mypubs" })}>
          My Pubs
        </button>
        <Reservations />
      </div>
    );
  }
}

export default ProfileTabs;
