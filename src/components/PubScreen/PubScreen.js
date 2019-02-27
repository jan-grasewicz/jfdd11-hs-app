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
          <h1 className="PubScreen-pubName">Nazwa Pubu</h1>

          <dl className="PubScreen-info-wrapper">
            <dt className="PubScreen-infoTitle">City:</dt>
            <dd className="PubScreen-info">Wejherowo</dd><br></br>
            <dt className="PubScreen-infoTitle">Adress:</dt>
            <dd className="PubScreen-info">62 Drunk Street</dd><br></br>
            <dt className="PubScreen-infoTitle">Operating hours:</dt>
            <dd className="PubScreen-info">18:00 - 02:30</dd><br></br>
            <dt className="PubScreen-infoTitle">Available space:</dt>
            <dd className="PubScreen-info">17</dd><br></br>
            <dt className="PubScreen-infoTitle">Phone:</dt>
            <dd className="PubScreen-info">(+48) 666-666-666</dd><br></br>
            <dt className="PubScreen-infoTitle">About us:</dt><br></br>
            <dd className="PubScreen-info">lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sitlorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit lorem impsum dolor sit</dd>
          </dl>
          <p className="PubScreen-find">Find us here:</p>
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
