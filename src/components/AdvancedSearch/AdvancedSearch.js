import React, { Component } from "react";

import "./AdvancedSearch.css";

class AdvancedSearch extends Component {
  state = {
    publist: this.props.pubs,
    city: "all",
    cout: 0
  };

  handleCitySelect = event => {
    this.setState({ city: event.target.value });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    console.log("submitted " + this.state.city);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="AdvancedSearch">
          <form>
            <div>
              <label name="city">City </label>
              <select onChange={this.handleCitySelect}>
                <option selected value="all">
                  Wszystkie Miasta
                </option>
                <option value="Gdańsk">Gdańsk</option>
                <option value="Sopot">Sopot</option>
                <option value="Gdynia">Gdynia</option>
                <option value="Wejherowo">Wejherowo</option>
              </select>
            </div>
            <div>
              <label>For how many? </label>
              <input
                value={this.state.cout}
                type="number"
                name="cout"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.submitForm}> Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdvancedSearch;
