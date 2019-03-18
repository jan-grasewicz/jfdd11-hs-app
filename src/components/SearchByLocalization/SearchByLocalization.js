import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { NavLink } from 'react-router-dom'
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import "./SearchByLocalization.css";

class SearchByLocalization extends Component {
  state = {
    coordinates: null
  };

  render() {
    const pubCoordinates = this.props.advancedSearchContext.publist

    return (
      <>
        <div className="menu-container">
          <HamburgerMenu />
        </div>
        <Map
          center={[54.49556752187409, 18.539428710937504]}
          zoom={10}
          style={{ height: "100vh" }}
          onClick={({ latlng: { lat, lng } }) => {
            this.setState({
              coordinates: { lat, lng }
            });
          }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.coordinates && 
           <Marker position={[this.state.coordinates.lat, this.state.coordinates.lng]}>
           </Marker>
          }
          {pubCoordinates.map(pub => {
            return (
              <Marker key={pub.id} position={[pub.coordinates.latitude, pub.coordinates.longitude]}>
              <Popup><NavLink className='SearchByLocalization-link' to={`/publist/${pub.id}`}>Welcome to {pub.name}. Call us: {pub.phone} or reach us at {pub.adress}</NavLink> </Popup>
            </Marker>
            )
          })}
        </Map>
      </>
    );
  }
}

export default withAdvancedSearch(SearchByLocalization);

