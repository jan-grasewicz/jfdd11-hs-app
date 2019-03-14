import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import "./SearchByLocalization.css";

class SearchByLocalization extends Component {
  state = {};

  render() {
    const pubCoordinates = this.props.advancedSearchContext.publist

    return (
      <>
        <div className="SearchByLocalization-menu-container">
          <HamburgerMenu />
        </div>
        <Map
          center={[54.3598871, 18.6678828]}
          zoom={13}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pubCoordinates.map(pub => {
            return (
              <Marker position={[pub.coordinates.latitude, pub.coordinates.longitude]}>
              <Popup>Here is {pub.name}. Call us: {pub.phone}, or reach us {pub.address}</Popup>
            </Marker>
            )
          })}
        </Map>
      </>
    );
  }
}

export default withAdvancedSearch(SearchByLocalization);

// console.log(
//   this.props.advancedSearchContext.publist.map(
//     pub => pub.coordinates.latitude
//   )
