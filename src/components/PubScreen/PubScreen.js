import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./PubScreen.css";

class PubScreen extends Component {
  render() {
    return (
      <div>
        <div className="PubScreen-wrapper">
          <div className="PubScreen-img-wrapper">
            <img className="PubScreen-pubImg" src="#" alt={`pub`} />
          </div>
          <h1 className="PubScreen-pubName">Nazwa Pubu</h1>
          <div className="PubScreen-info-wrapper">
            <dl className="PubScreen-info">
              <dt>City:</dt>
              <dd>Wejherowo</dd>
              <br />
              <dt>Adress:</dt>
              <dd>62 Drunk Street</dd>
              <br />
              <dt>Operating hours:</dt>
              <dd>18:00 - 02:30</dd>
              <br />
              <dt>Available space:</dt>
              <dd>17</dd>
              <br />
              <dt>Phone:</dt>
              <dd>(+48) 666-666-666</dd>
              <br />
              <dt>About us:</dt>
              <br />
              <dd className="PubScreen-info-about">
                lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor
                sit lorem impsum dolor sitlorem impsum dolor sit lorem impsum
                dolor sit lorem impsum dolor sit lorem impsum dolor sit
              </dd>
            </dl>
          </div>
          <p className="PubScreen-find">Find us here:</p>
          <div className="PubScreen-iconWrap">
            <FontAwesomeIcon icon={faChevronCircleLeft} className="SideMenu-icon-profile" />
          </div>
          <Map
            center={[54.759159, 18.508961]}
            zoom={13}
            style={{ height: 300, width: 375 }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[54.7591598, 18.508961]}>
              <Popup>
                Wyjdziesz stąd najebany jak księciunio <br /> Drogo, ale dobrze.
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}

export default PubScreen;
