import React, { Component } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import firebase from "firebase";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./PubRegistration.css";
import { withAuth } from "../../contexts/AuthContext/AuthContext";

const initialState = {
  error: null,
  success: null,
  name: "",
  city: "",
  adress: "",
  openhour: "",
  closehour: "",
  email: "",
  space: 0,
  phone: "",
  img: "chooy wie",
  about: "",
  coordinates: null
};

class PubRegistration extends Component {
  state = { ...initialState, owner: this.props.authContext.user.uid };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const { error, success, ...data } = this.state;
    event.preventDefault();

    firebase
      .database()
      .ref("pubs")
      .push(data)
      .then(() => {
        this.setState({
          error: null,
          success: "Your pub has been added",
          ...initialState
        });
      })
      .catch(error =>
        this.setState({ error: error.message, success: null }).then(() =>
          console.log(this.state.error)
        )
      );
  };

  render() {
    const {
      name,
      city,
      adress,
      openhour,
      closehour,
      email,
      space,
      phone,
      about,
      coordinates
    } = this.state;

    return (
      <>
        <div className="menu-container">
          <HamburgerMenu />
        </div>
        <div className="PubRegistration-container">
          <h3>Register Your Pub</h3>
          <form
            className="PubRegistration-form"
            id="pub-register"
            onSubmit={this.handleSubmit}
          >
            <h4>*Fill the fields below</h4>
            <p>* all fields are required</p>
            <label htmlFor="pubname">Pub Name:</label>
            <input
              type="text"
              id="pub-name"
              name="name"
              required
              onChange={this.handleChange}
              value={name}
            />
            <br />
            <label htmlFor="pub-city">City:</label>
            <input
              type="text"
              id="pub-city"
              name="city"
              required
              value={city}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="pub-adress">Adress:</label>
            <input
              type="text"
              id="pub-adress"
              name="adress"
              required
              value={adress}
              onChange={this.handleChange}
            />
            <br />
            <p>Operating hours</p>
            <label htmlFor="pub-oHours">from: </label>
            <input
              type="time"
              id="pub-oHours"
              name="openhour"
              min="00:00"
              max="23:00"
              step="3600"
              required
              value={openhour}
              onChange={this.handleChange}
            />
            <label htmlFor="pub-cHours">to:</label>
            <input
              type="time"
              id="pub-cHours"
              name="closehour"
              min="00:00"
              max="23:30"
              step="3600"
              required
              value={closehour}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="pub-email">E-mail:</label>
            <input
              type="email"
              id="pub-email"
              name="email"
              required
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="pub-space">Available space:</label>
            <input
              type="number"
              id="pub-space"
              name="space"
              min="5"
              max="100"
              required
              value={space}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="pub-phone">Phone number:</label>
            <input
              type="tel"
              id="pub-phone"
              name="phone"
              minLength="9"
              maxLength="11"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              required
              value={phone}
              onChange={this.handleChange}
            />
            <span>Format: 123-456-789</span>
            <br />
            <label htmlFor="pub-img">Upload Your Pub Img:</label>
            <input
              type="file"
              id="pub-img"
              name="img"
              accept="image/png, image/jpeg"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="pub-about">About:</label>
            <br />
            <textarea
              id="pub-about"
              name="about"
              maxLength="250"
              rows="10"
              cols="40"
              placeholder="write few words about your pub"
              required
              value={about}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit Form" />
          </form>
          {/* {coordinates && (
          <div>
            <span>Latitude: {coordinates.latitude.toFixed(2)}</span>
            <span>Longitude: {coordinates.longitude.toFixed(2)}</span>
          </div>
        )} */}

          <Map
            center={
              coordinates
                ? { lat: coordinates.latitude, lng: coordinates.longitude }
                : { lat: 54.372158, lng: 18.638306 }
            }
            zoom={13}
            style={{ height: 300, width: 375 }}
            onClick={({ latlng: { lat, lng } }) => {
              this.setState({
                coordinates: { latitude: lat, longitude: lng }
              });
            }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coordinates && (
              <Marker
                position={{
                  lat: coordinates.latitude,
                  lng: coordinates.longitude
                }}
              >
                <Popup>{"555 - 555 - 555"}</Popup>
              </Marker>
            )}
          </Map>
        </div>
      </>
    );
  }
}

export default withAuth(PubRegistration);
