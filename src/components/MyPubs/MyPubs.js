import React, { Component } from "react";

import "./MyPubs.css";

class MyPubs extends Component {
  render() {
    return (
      <div className="MyPubs">
        <ul>
          {/* map pubs */}
          <li key="firebaseId1">
            <div className="MyPubs-pub">
              <h2 className="MyPubs-pubname">
                Pub Name <span>reservations:</span>
              </h2>
              <ul>
                {/* map filter reservations for one pub */}
                <li key="reserv-key1" className="MyPubs-reservation-li">
                  <div className="MyPubs-reservation">
                    <h3 className="MyPubs-userName">user name</h3>
                    <button className="MyPubs-switch MyPubs-switch-accepted">
                      switch
                    </button>
                    <p className="MyPubs-date">date and hour</p>
                  </div>
                </li>
                <li key="reserv-key2" className="MyPubs-reservation-li">
                  <div className="MyPubs-reservation">
                    <h3 className="MyPubs-userName">user name</h3>
                    <button className="MyPubs-switch MyPubs-switch-rejected">
                      switch
                    </button>
                    <p className="MyPubs-date">date and hour</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyPubs;
