import React, { Component } from "react";

import "./Reservations.css";

class Reservations extends Component {
  render() {
    return (
      <div className="Reservations">
        <ul>
          <li key="firebaseId1">
            <div className="Reservations-reservation">
              <h2 className="Reservations-pubname">Pub Name</h2>
              <div className="Reservations-state Reservations-pending">
                pending
              </div>
              <p className="Reservations-date">
                reservation from: (hour) (date)
              </p>
            </div>
          </li>

          <li key="firebaseId2">
            <div className="Reservations-reservation">
              <h2 className="Reservations-pubname">Pub Name</h2>
              <div className="Reservations-state Reservations-accepted">
                accepted
              </div>
              <p className="Reservations-date">
                reservation from: (hour) (date)
              </p>
            </div>
          </li>

          <li key="firebaseId3">
            <div className="Reservations-reservation">
              <h2 className="Reservations-pubname">Pub Name</h2>
              <div className="Reservations-state Reservations-rejected">
                rejected
              </div>
              <p className="Reservations-date">
                reservation from: (hour) (date)
              </p>
            </div>
          </li>
          <li key="firebaseId4">
            <div className="Reservations-reservation">
              <h2 className="Reservations-pubname">Pub Name</h2>
              <div className="Reservations-state">past</div>
              <p className="Reservations-date">
                reservation from: (hour) (date)
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Reservations;
