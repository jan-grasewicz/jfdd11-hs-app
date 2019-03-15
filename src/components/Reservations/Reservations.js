import React, { Component } from "react";

import "./Reservations.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class Reservations extends Component {
  getPub = ajdi =>
    this.props.advancedSearchContext.publist.find(pub => pub.id === ajdi);

  render() {
    const { reservations, users, publist } = this.props.advancedSearchContext;
    const { getPub } = this;
    console.log("adv context", this.props.advancedSearchContext);
    let reservationsArr = reservations.filter(
      res => res.userUid === this.props.user.uid
    );

    console.log(reservationsArr);
    return (
      <div className="Reservations">
        <ul>
          {reservationsArr.map(res => (
            <li key={res.id}>
              <div className="Reservations-reservation">
                <h2 className="Reservations-pubname">
                  {getPub(res.placeId).name}
                </h2>
                <div
                  className={`Reservations-state Reservations-${res.status}`}
                >
                  {res.status}
                </div>
                <p className="Reservations-date">
                  reservation from: (hour) (date)
                </p>
              </div>
            </li>
          ))}

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
