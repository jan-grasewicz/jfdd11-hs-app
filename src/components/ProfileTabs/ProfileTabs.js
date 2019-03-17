import React, { Component } from "react";

import Reservations from "../Reservations";
import MyPubs from "../MyPubs";

// import { withAuth } from "../../contexts/AuthContext/AuthContext";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import "./ProfileTabs.css";

class ProfileTabs extends Component {
  state = {
    tab: "reservations"
    // tab: "mypubs"
  };
  render() {
    const { tab } = this.state;
    // let { userData } = this.props.authContext;
    let {publist}=this.props.advancedSearchContext
    let myPubList = publist.filter(pub => pub.owner === this.props.user.uid);
    console.log(myPubList.length)
    return (
      <div className="ProfileTabs">
        {publist && myPubList.length>0 ? (
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

        {this.state.tab === "mypubs" ? (
          <MyPubs user={this.props.user} />
        ) : (
          <Reservations user={this.props.user} />
        )}
      </div>
    );
  }
}

export default withAdvancedSearch(ProfileTabs);
