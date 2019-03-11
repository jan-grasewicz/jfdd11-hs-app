import React, { Component } from "react";

import "./ProfileTabs.css";
import Reservations from "../Reservations";
import MyPubs from "../MyPubs";

class ProfileTabs extends Component {
  state = {
    tab: "reservations"
  };
  render() {
    console.log(this.state.tab);
    return (
      <div className="ProfileTabs">
        <h2>ProfileTabs</h2>
        <button
          className="ProfileTabs-tab"
          onClick={() => this.setState({ tab: "reservations" })}
        >
          Reservations
        </button>
        <button
          className="ProfileTabs-tab ProfileTabs-tabActive"
          onClick={() => this.setState({ tab: "mypubs" })}
        >
          My Pubs
        </button>
        {this.state.tab === "mypubs" ? <MyPubs /> : <Reservations />}
      </div>
    );
  }
}

export default ProfileTabs;
