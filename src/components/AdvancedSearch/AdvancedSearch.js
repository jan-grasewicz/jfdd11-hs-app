import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./AdvancedSearch.css";
import { withAdvancedSearch } from "../../contexts/AdvancedSearch/AdvancedSearch";

class AdvancedSearch extends Component {
  submitForm = event => {
    event.preventDefault();
  };

  prepareArr = item => {
    let retArr = [];
    Object.entries(this.props.advancedSearchContext.publist)
      .map(([id, value]) => ({ id, ...value }))
      .forEach(pub => {
        if (retArr.includes(pub[item])) {
          return;
        } else {
          retArr.push(pub[item]);
        }
      });
    return retArr.sort();
  };

  fittingPubs = event => {
    event.preventDefault();
    const {
      city,
      cout,
      openedFrom,
      openedTill
    } = this.props.advancedSearchContext;
    this.props.advancedSearchContext.pushFilteredPubList(
      this.props.advancedSearchContext.publist
        .filter(pub => (city === "all" ? true : pub.city === city))
        .filter(pub => pub.space >= cout)
        .filter(pub =>
          openedFrom === "all" ? pub : pub.openhour <= openedFrom
        )
        .filter(pub =>
          openedTill === "all" ? pub : pub.closehour >= openedTill
        )
    );
    this.props.advancedSearchContext.pushFilters(
      city,
      cout,
      openedFrom,
      openedTill
    );
    this.props.history.push("/publist");
  };

  handleResetFilters = event => {
    event.preventDefault();
    this.props.advancedSearchContext.resetFilters();
  };

  render() {
    const { handleChange } = this.props.advancedSearchContext;
    let {
      city,
      cout,
      openedFrom,
      openedTill
    } = this.props.advancedSearchContext;
    return (
      <div>
        <div className="AdvancedSearch">
          <h3>Advanced Search Options</h3>
          <form className="AdvancedSearch-form">
            <div className="AdvancedSearch-option">
              <label name="city">City:</label>
              <select name="city" value={city} onChange={handleChange}>
                <option value="all">Any</option>
                {this.prepareArr("city").map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="AdvancedSearch-option">
              <label>For how many? </label>
              <input className="AdvancedSearch-input"
                value={cout}
                type="number"
                name="cout"
                onChange={handleChange}
              />
            </div>
            <div className="AdvancedSearch-option">
              <label>Open from:</label>
              <select
                name="openedFrom"
                value={openedFrom}
                onChange={handleChange}
              >
                <option value="all">--</option>
                {this.prepareArr("openhour").map(hour => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="AdvancedSearch-option">
              <label>Open till:</label>
              <select
                name="openedTill"
                value={openedTill}
                onChange={handleChange}
              >
                <option value="all">--</option>

                {this.prepareArr("closehour").map(hour => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div className="AdvancedSearch-form-buttons-wrap">
              <button onClick={this.fittingPubs}>Search</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(withAdvancedSearch(AdvancedSearch));
