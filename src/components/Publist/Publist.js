import React, { Component } from "react";

import "./Publist.css";
import { Link } from "react-router-dom";
class Publist extends Component {
  render() {
    return (
      <div className="Publist">
        <ul className="Publist-ul">
          {this.props.publistdata.map(pub => (
            <li key={pub.id} className="Publist-li">
              <h2 className="Publist-h2">
                <Link className="Publist-link" to={`/publist/${pub.id}`}>
                  {pub.name}
                </Link>
              </h2>
              <div className="Publist-imgcontainer">
                <Link className="Publist-link" to={`/publist/${pub.id}`}>
                  <img className="Publist-img" src={pub.img} alt="pub" />
                </Link>
              </div>
              <div className="Publist-info">
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
