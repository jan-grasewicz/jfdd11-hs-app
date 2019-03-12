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
    const { tab, mypubs } = this.state;
    return (
      <div className="ProfileTabs">
        <button
          className={
            tab === "reservations"
              ? "ProfileTabs-tab ProfileTabs-tabActive"
              : "ProfileTabs-tab "
          }
          onClick={() => this.setState({ tab: "reservations" })}
        >
          Reservations
        </button>
        <button
          className={
            tab === "mypubs"
              ? "ProfileTabs-tab ProfileTabs-tabActive"
              : "ProfileTabs-tab "
          }
          // {tab==="mypubs"&& className="ProfileTabs-tabActive"}
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
