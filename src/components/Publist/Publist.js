import React, { Component } from "react";

import "./Publist.css";
import { Link } from "react-router-dom";
class Publist extends Component {
  render() {
    console.log(this.props.publistdata);
    return (
      <div className="Publist">
        {this.props.publistdata.length? (
          <ul className="Publist-ul">
            {this.props.publistdata.map((pub, index) => (
              <li key={pub.id} className="Publist-li">
                <h2 className="Publist-h2">
                  <Link className="Publist-link" to={`/publist/${pub.id}`}>
                    {pub.name}
                  </Link>
                </h2>
                <div className="Publist-imgcontainer">
                  <Link className="Publist-link" to={`/publist/${pub.id}`}>
                    <img
                      className="Publist-img"
                      src={pub.img + "?id=" + (index + 1)}
                      alt="pub"
                    />
                  </Link>
                </div>
                <div className="Publist-info">
                  <p>{pub.city}</p>
                  <p>{pub.address}</p>
                  <p>
                    Open from {pub.openhour} to {pub.closehour}
                  </p>
                  {/* maybe add banner opened now or closed now instead of hours */}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="Publist-noResults">No matching search results.</h2>
        )}
      </div>
    );
  }
}

export default Publist;
