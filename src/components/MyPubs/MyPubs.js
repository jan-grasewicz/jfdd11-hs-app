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
                <li key="reserv-key" className="MyPubs-reservation-li">
                  <div className="MyPubs-reservation">
                    <h3>user name</h3>
                    <p>date and hour</p>
                    <button>switch</button>
                  </div>
                </li>
                <li key="reserv-key" className="MyPubs-reservation-li">
                  <div className="MyPubs-reservation">
                    <h3>user name</h3>
                    <p>date and hour</p>
                    <button>switch</button>
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
