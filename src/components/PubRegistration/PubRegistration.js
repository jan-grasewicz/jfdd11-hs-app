import React, { Component } from "react";

import "./PubRegistration.css";

class PubRegistration extends Component {
  render() {
    return (
      <div className="PubRegistration-container">
        <h3>Register Your Pub</h3>
        <form className="PubRegistration-form" id="pub-register">
          <h4>Fill all the fields below:</h4>
          <label htmlFor="pub-name">Pub Name:</label>
          <input id="pub-name" type="text" />
          <br />
          <label htmlFor="pub-city">City:</label>
          <input id="pub-city" type="text" />
          <br />
          <label htmlFor="pub-adress">Adress:</label>
          <input id="pub-adress" type="text" />
          <br />
          <p>Operating hours</p>
          <label htmlFor="pub-oHours">from: </label>
          <input type="time" id="pub-oHours" min="00:00" max="23:00" />
          <label htmlFor="pub-cHours">to:</label>
          <input type="time" id="pub-cHours" min="00:00" max="23:00" />
          <br />
          <label htmlFor="pub-email">E-mail:</label>
          <input id="pub-email" type="email" placeholder="example@test.com" />
          <br />
          <label htmlFor="pub-space">Available space:</label>

          <input id="pub-space" type="number" min="5" max="100" />
          <br />
          <label htmlFor="pub-phone">Phone number:</label>
          <input id="pub-phone" type="tel" minLength="9" maxLength="16" />
          <br />
          <label htmlFor="pub-img">Upload Your Pub Img:</label>
          <input
            type="file"
            id="pub-img"
            name="pub-img"
            accept="image/png, image/jpeg"
          />
          <br />
          <label htmlFor="pub-about">About:</label>
          <br />
          <textarea
            id="pub-about"
            maxLength="250"
            cols="40"
            rows="10"
            placeholder="write few words about your pub"
          />

          <input type="submit" value="Submit Request" />
        </form>
      </div>
    );
  }
}

export default PubRegistration;
