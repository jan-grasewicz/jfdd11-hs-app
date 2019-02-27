import React, { Component } from "react";

import "./Publist.css";
import { Link } from "react-router-dom";
class Publist extends Component {
  render() {
    return (
      <div className="Publist">
        <h1>Publist</h1>
        <ul className="Publist-ul">
          {this.props.publistdata.map(pub => (
            <Link key={pub.id} to={`/publist/${pub.id}`}>
              <li  className="Publist-li">
                <h2 className="Publist-h2">{pub.name}</h2>
                <div className="Publist-imgcontainer">
                  <img className="Publist-img" src={pub.img} />
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
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Publist;
