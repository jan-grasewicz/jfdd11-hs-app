import React, { Component } from "react";

import "./AdvancedSearch.css";

class AdvancedSearch extends Component {
  state = {
    publist: this.props.pubs,
    city: "all",
    cout: 5,
    openedFrom: "",
    openedTill: "",
    openButtons: [],
    closeButtons: [],
    cities: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    console.log("submitted " + this.state.city);
  };

  checkClosingHours = () => {
    let closinghours = [];
    Object.entries(this.state.publist)
      .map(([id, value]) => ({ id, ...value }))
      .forEach(pub => {
        if (closinghours.includes(pub.closehour)) {
          return;
        } else {
          closinghours.push(pub.closehour);
        }
      });
    this.setState({ closeButtons: closinghours.sort() });
  };

  checkOpeningHours = () => {
    let openinghoursarr = [];
    Object.entries(this.state.publist)
      .map(([id, value]) => ({ id, ...value }))
      .forEach(pub => {
        if (openinghoursarr.includes(pub.openhour)) {
          return;
        } else {
          openinghoursarr.push(pub.openhour);
        }
      });
    this.setState({ openButtons: openinghoursarr.sort() });
  };

  checkCityOptions = () => {
    let possiblecities = [];
    Object.entries(this.state.publist)
      .map(([id, value]) => ({ id, ...value }))
      .forEach(pub => {
        if (possiblecities.includes(pub.city)) {
          return;
        } else {
          possiblecities.push(pub.city);
        }
      });
    this.setState({ cities: possiblecities.sort() });
  };

  fittingPubs = event => {
    event.preventDefault();
    const { city, cout, openedFrom, openedTill } = this.state;
    return this.state.publist
      .filter(pub => (city === "all" ? pub : pub.city === city))
      .filter(pub => pub.space >= cout)
      .filter(pub => (openedFrom ? pub.openhour >= openedFrom : pub))
      .filter(pub => (openedTill ? pub.closehour >= openedTill : pub));
  };

  componentDidMount() {
    this.checkCityOptions();
    this.checkOpeningHours();
    this.checkClosingHours();
  }

  render() {
    return (
      <div>
        <div className="AdvancedSearch">
          <form>
            <div>
              <label name="city">City </label>
              <select
                name="city"
                defaultValue="all"
                onChange={this.handleChange}
              >
                <option value="all">Wszystkie Miasta</option>
                {this.state.cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
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
            <div>
              <label>Opened from:</label>
              <select
                name="openedFrom"
                defaultValue={"all"}
                onChange={this.handleChange}
              >
                <option value="all">All</option>
                {this.state.openButtons.map(hour => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Opened till:</label>
              <select
                name="openedTill"
                defaultValue={"all"}
                onChange={this.handleChange}
              >
                <option value="all">All</option>

                {this.state.closeButtons.map(hour => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={this.fittingPubs}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdvancedSearch;
