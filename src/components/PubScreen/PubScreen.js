import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./PubScreen.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

const SignUpOrLogIn = () => {
  return (
    <div className="PubScreen-login-signup-container">
      <p>To make a reservation, log in or sign up first</p>
      <Link className="PubScreen-login-signup-btns" to={"/login"}>
        Log In
      </Link>
      <Link className="PubScreen-login-signup-btns" to={"/signup"}>
        Sign Up
      </Link>
    </div>
  );
};

class PubScreen extends Component {
  render() {
    let pubId = this.props.match.params.pubId;
    let pub = this.props.advancedSearchContext.publist.find(
      pub => pub.id === pubId
    );
    let reservationLink = `/publist/${pubId}/booking`;
    const { user } = this.props.authContext;
    return (
      <div>
        <div className="menu-container">
          <HamburgerMenu />
        </div>
        {pub && (
          <div className="PubScreen-wrapper">
            <div className="PubScreen-img-wrapper">
              <img
                className="PubScreen-pubImg"
                src={pub.photoUrl}
                alt={`pub ${pub.name} located at ${
                  pub.address
                } in the city of {pub.city}`}
              />
            </div>
            <h1 className="PubScreen-pubName">{pub.name}</h1>

            {user !== null ? (
              <Link
                to={reservationLink}
                className="PubScreen-reservation-button"
              >
                Make Reservation
              </Link>
            ) : (
              <>
                <SignUpOrLogIn />
              </>
            )}

            <div className="PubScreen-info-wrapper">
              <dl className="PubScreen-info">
                <dt>City:</dt>
                <dd>{pub.city}</dd>
                <br />
                <dt>Adress:</dt>
                <dd>{pub.address}</dd>
                <br />
                <dt>Operating hours:</dt>
                <dd>
                  {pub.openhour} - {pub.closehour}
                </dd>
                <br />
                <dt>E-mail:</dt>
                <dd>{pub.email}</dd>
                <br />
                <dt>Available space:</dt>
                <dd>{pub.space}</dd>
                <br />
                <dt>Phone:</dt>
                <dd>{pub.phone}</dd>
                <br />
                <dt>About us:</dt>
                <br />
                <dd className="PubScreen-info-about">{pub.about}</dd>
              </dl>
            </div>
            <p className="PubScreen-find">Find us here:</p>
            <div className="PubScreen-iconWrap">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                onClick={() => this.props.history.push("/publist")}
                className="PubScreen-icon-back"
              />
            </div>
            <Map
              center={[pub.coordinates.latitude, pub.coordinates.longitude]}
              zoom={13}
              style={{ height: 300, width: 375 }}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[pub.coordinates.latitude, pub.coordinates.longitude]}
              >
                <Popup>{pub.email}</Popup>
              </Marker>
            </Map>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(withAdvancedSearch(PubScreen));
