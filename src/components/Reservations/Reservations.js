import React, { Component } from "react";

import "./Reservations.css";

class Reservations extends Component {
  render() {
    return (
      <div className="Reservations">
        <ul>
          <li>There should be a list of all reservations</li>
          <li>
            sorted the way we have "pending" on top. Then "accepted". Then
            "past".
          </li>
          <li>
            If the User is also a pub owner then display second tab named: "My
            pubs".
          </li>
        </ul>
      </div>
    );
  }
}

export default Reservations;
