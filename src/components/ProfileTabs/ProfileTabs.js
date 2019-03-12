import React, { Component } from "react";

import Reservations from "../Reservations";
import MyPubs from "../MyPubs";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

import "./ProfileTabs.css";
class ProfileTabs extends Component {
  state = {
    tab: "reservations"
  };
  render() {
    const { tab } = this.state;
    let { userData } = this.props.authContext;
    return (
      <div className="ProfileTabs">
        {userData && userData.isOwner ? (
          <>
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
              onClick={() => this.setState({ tab: "mypubs" })}
            >
              My Pubs
            </button>
          </>
        ) : (
          <button
            className={
              tab === "reservations"
                ? "ProfileTabs-tab ProfileTabs-tabActive"
                : "ProfileTabs-tab "
            }
            onClick={() => this.setState({ tab: "reservations" })}
            style={{ width: "100%" }}
          >
            Reservations
          </button>
        )}

        {this.state.tab === "mypubs" ? <MyPubs /> : <Reservations />}
      </div>
    );
  }
}

export default withAuth(ProfileTabs);
