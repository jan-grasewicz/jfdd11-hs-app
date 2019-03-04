import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./PubScreen.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class PubScreen extends Component {
  render() {
    let pubId = this.props.match.params.pubId;
    let pub = this.props.advancedSearchContext.publist.find(
      pub => pub.id === pubId
    );
    console.log(pub);
    return (
      <div>
        {pub && (
          <div className="PubScreen-wrapper">
            <div className="PubScreen-img-wrapper">
              <img className="PubScreen-pubImg" src={pub.img} alt={`pub`} />
            </div>
            <h1 className="PubScreen-pubName">{pub.name}</h1>
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

export default withAdvancedSearch(PubScreen);
