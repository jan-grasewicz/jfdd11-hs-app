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
              <h2 className="MyPubs-pubname">Pub Name</h2>
              <p className="MyPubs-reservations">
                reservations:
              </p>
              
              <ul>
                {/* map filter reservations for one pub */}

                
              </ul>
              <p className="MyPubs-date">
                reservation from: (hour) (date)
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyPubs;
