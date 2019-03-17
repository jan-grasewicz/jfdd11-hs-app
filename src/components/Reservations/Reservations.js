import React, { Component } from "react";

import "./Reservations.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class Reservations extends Component {
  getPub = ajdi =>
    this.props.advancedSearchContext.publist.find(pub => pub.id === ajdi);

  sortByStatus = reservationsArr => {
    let pendingResArr = reservationsArr.filter(res => res.status === "pending");
    let acceptedResArr = reservationsArr.filter(
      res => res.status === "accepted"
    );
    let rejectedResArr = reservationsArr.filter(
      res => res.status === "rejected"
    );
    return pendingResArr.concat(acceptedResArr).concat(rejectedResArr);
  };

  render() {
    const { reservations } = this.props.advancedSearchContext;
    const { getPub } = this;
    let reservationsArr = reservations.filter(
      res => res.userUid === this.props.user.uid
    );

    return (
      <div className="Reservations">
        <ul>
          {this.sortByStatus(reservationsArr).map(res => (
            <li key={res.id}>
              <div className="Reservations-reservation">
                <h2 className="Reservations-pubname">
                  {getPub(res.placeId)
                    ? getPub(res.placeId).name
                    : "American Dream"}
                </h2>
                <div
                  className={`Reservations-state Reservations-${res.status}`}
                >
                  {res.status}
                </div>
                <p className="Reservations-date">
                  reservation on:{" "}
                  {new Date(res.date).toDateString() +
                    " from " +
                    new Date(res.date).toLocaleTimeString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withAdvancedSearch(Reservations);
