// pytania do Mistrza :
// - czy atrybuty name musza byc identycznie nazwane jak w firebase w liscie pubow?
// - czy open-close hours moga byc w inpucie time a nie select?
// - jak to wgl wjebac do firebomby?
// - jak dodac lokalizacje pubow?
//        * (2 inputy i sztywno wklepac lang i long + ew. link do strony ktora to umozliwia)
//        * wrzucic mapke leaflet i jakims cudem umozliwic dodanie znacznika uzytkownikowi i po wybraniu tego wlasnie znacznika
//          na mapie, jakims magicznym sposobem te wartosci znajda sie w koordynatach pubu i tez są przeslane do firebomby razem z formularzem
// - jak napisac, ze wszystkie pola są wymagane ? (nie chodzi o dopisanie required ale o tą chujową gwiazdeczkę - przy każdym input'ie czy zebrac wszystko i dupnąć info ze musi wypełnić)

import React, { Component } from "react";
import firebase from "firebase";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./PubRegistration.css";

class PubRegistration extends Component {
  state = {
    name: "",
    city: "",
    adress: "",
    openhour: "",
    closehour: "",
    email: "",
    space: "",
    phone: "",
    img: "chooy wie",
    about: ""
  };

  render() {
    return (
      <div className="PubRegistration-container">
        <h3>Register Your Pub</h3>
        <form className="PubRegistration-form" id="pub-register">
          <h4>*Fill the fields below</h4>
          <p>* all fields are required</p>
          <label htmlFor="pubname">Pub Name:</label>
          <input id="pub-name" type="text" name="name" />
          <br />
          <label htmlFor="pub-city">City:</label>
          <input id="pub-city" type="text" name="city" />
          <br />
          <label htmlFor="pub-adress">Adress:</label>
          <input id="pub-adress" type="text" name="adress" />
          <br />
          <p>Operating hours</p>
          <label htmlFor="pub-oHours">from: </label>
          <input
            type="time"
            id="pub-oHours"
            name="openhour"
            min="00:00"
            max="23:00"
          />
          <label htmlFor="pub-cHours">to:</label>
          <input
            type="time"
            id="pub-cHours"
            name="closehour"
            min="00:00"
            max="23:00"
          />
          <br />
          <label htmlFor="pub-email">E-mail:</label>
          <input id="pub-email" type="email" name="email" />
          <br />
          <label htmlFor="pub-space">Available space:</label>
          <input id="pub-space" type="number" name="space" min="5" max="100" />
          <br />
          <label htmlFor="pub-phone">Phone number:</label>
          <input
            id="pub-phone"
            type="tel"
            name="phone"
            minLength="9"
            maxLength="9"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          />
          <span>Format: 123-456-789</span>
          <br />
          <label htmlFor="pub-img">Upload Your Pub Img:</label>
          <input
            type="file"
            id="pub-img"
            name="img"
            accept="image/png, image/jpeg"
          />
          <br />
          <label htmlFor="pub-about">About:</label>
          <br />
          <textarea
            id="pub-about"
            name="about"
            maxLength="250"
            cols="40"
            rows="10"
            placeholder="write few words about your pub"
          />
          <input type="submit" value="Submit Request" />
        </form>
        <div>
          <span>Latitude: 33.33</span>
          <span>Longitude: 23.22</span>
        </div>
        <Map
          center={{ lat: 54.372158, lng: 18.638306 }}
          zoom={13}
          style={{ height: 300, width: 375 }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={{ lat: 54.372158, lng: 18.638306 }}>
            <Popup>{555 - 555 - 555}</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default PubRegistration;
