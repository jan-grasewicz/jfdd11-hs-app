import React, { Component } from "react";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import firebase from "firebase";
import "./MyPubs.css";
class MyPubs extends Component {
  getUser = res => {
    let user = this.props.advancedSearchContext.users.find(
      user => user.id === res.userUid
    );

    return user.name + " " + user.surname;
  };

  changeReservationState = ajdi => {
    console.log(
      firebase
        .database()
        .ref("reservations")
        .child(`${ajdi}`)
    );
  };

  render() {
    const {
      publist,
      reservations,
      updateState
    } = this.props.advancedSearchContext;
    const { user } = this.props;
    let myPubList = publist.filter(pub => pub.owner === user.uid);
    return (
      <div className="MyPubs">
        <ul>
          {console.log(myPubList)}
          {myPubList.length === 0 && (
            <p>
              No pubs to display. To add your pub go to: Menu > Add Your Pub.
            </p>
          )}

          {myPubList.map(pub => (
            <li key={pub.id}>
              <div className="MyPubs-pub">
                <h2 className="MyPubs-pubname">
                  {pub.name} <span>reservations:</span>
                </h2>
                <ul>
                  {reservations.map(reservation => (
                    <li key={reservation.id} className="MyPubs-reservation-li">
                      <div className="MyPubs-reservation">
                        <h3 className="MyPubs-userName">
                          {this.getUser(reservation)}
                        </h3>
                        <button
                          className={`MyPubs-btn MyPubs-btn-reject ${reservation.status !==
                            "pending" && "MyPubs-btn-inactive"}`}
                          onClick={() =>
                            updateState(reservation.id, "rejected")
                          }
                          disabled={reservation.status !== "pending"}
                        >
                          Reject
                        </button>
                        <button
                          className={`MyPubs-btn MyPubs-btn-accept ${reservation.status !==
                            "pending" && "MyPubs-btn-inactive"}`}
                          onClick={() =>
                            updateState(reservation.id, "accepted")
                          }
                          disabled={reservation.status !== "pending"}
                        >
                          Accept
                        </button>
                        <p className="MyPubs-date">
                          {new Date(reservation.date).toDateString()}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withAdvancedSearch(MyPubs);
