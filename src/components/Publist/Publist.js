import React, { Component } from "react";

import "./Publist.css";

class Publist extends Component {
  render() {
    return (
      <div className="Publist">
        <h1>Publist</h1>
        <ul className="Publist-ul">
          {this.props.publistdata.map(pub => (
            <li key={pub.id} className="Publist-li">
              <img className="Publist-img" src={pub.img} />
              <h2>{pub.name}</h2>
              <p>{pub.city}</p>
              <p>{pub.address}</p>
              <p>
                Open from {pub.openhour} to {pub.closehour}
              </p>
              <p>{pub.phone}</p>
              <p>{pub.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Publist;
