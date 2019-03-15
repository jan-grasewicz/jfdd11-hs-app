import React, { Component } from "react";

import "./Reservations.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class Reservations extends Component {
  render() {
    const { reservations, users, publist } = this.props.advancedSearchContext;
    console.log("adv context", this.props.advancedSearchContext);
    console.log();
    let pub;
    return (
      <div className="Reservations">
        <ul>
          {reservations &&
            publist &&
            users &&
            reservations
              .filter(res => res.userUid === this.props.user)
              .map(reservation => {
                pub = publist.find(pub => pub.id === reservation.placeId);
                return (
                  <li key={reservation.id}>
                    <div className="Reservations-reservation">
                      <h2 className="Reservations-pubname">{pub.name}</h2>
                      <div
                        className={
                          "Reservations-state " +
                          "Reservations-" +
                          reservation.status
                        }
                      >
                        {reservation.status}
                      </div>
                      <p className="Reservations-date">
                        reservation from:{" "}
                        {new Date(reservation.date).toLocaleTimeString() +
                          " " +
                          new Date(reservation.date).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                );
              })}

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

export default withAdvancedSearch(Reservations);
