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
              <h2 className="Publist-h2">{pub.name}</h2>

              <img className="Publist-img" src={pub.img} />
              <div>
                <p>{pub.city}</p>
                <p>{pub.address}</p>
                <p>
                  Open from {pub.openhour} to {pub.closehour}
                </p>
                {/* Add banner opened now or closed now instead of hours */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Publist;
