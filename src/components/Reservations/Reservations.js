import React, { Component } from "react";

import "./Reservations.css";

class Reservations extends Component {
  render() {
    return (
      <div className="Reservations">
        <ul>
          <li>There should be a list of all reservations</li>
          <li>
            "pending"
          </li>
          <li>
            "accepted"
          </li>
          <li>
          "past"
          </li>
        </ul>
      </div>
    );
  }
}

export default Reservations;
