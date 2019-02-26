import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './PubScreen.css'

class PubScreen extends Component {

  render() {
    return (
      <div>
        <div className="PubScreen-wrapper">
          <div className="PubScreen-img-wrapper">
            <img className="PubScreen-pubImg"
              src="#"
              alt={`pub`} ></img>
          </div>
          <h1 className="PubScreen-pubName">nazwa pubu tutaj</h1>
          <div className="PubScreen-info-wrapper">
            <span className="PubScreen-infoTitle">City:</span><p>Wejherowo</p>
            <span className="PubScreen-infoTitle">Adress:</span><p>62 Drunk Street</p>
            <span className="PubScreen-infoTitle">Operating hours: <p> from 18:00 to 02:30</p></span>
            <span className="PubScreen-infoTitle">Phone:</span><p>(+48) 666-666-666</p>
            <span className="PubScreen-infoTitle">email:</span><p>pub@wejherowo.com</p>
            <span className="PubScreen-infoTitle">email:</span><p>lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sitlorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit</p>
          </div>
          <p>Find us here:</p>
          <Map center={[54.759159, 18.508961]} zoom={13} style={{ height: 300, width: 375 }}>
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
    )
  }
}

export default PubScreen
