import React, { Component } from "react";

import "./HomeScreen.css";
import SearchBar from "../SearchBar/SearchBar";

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
        <div className="HomeScreen-wrapper">
          <h1 className="HomeScreen-h1">Brewio</h1>
          <p className="HomeScreen-p">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </p>
          <SearchBar />
          <button className="HomeScreen-btn">Zaawansowane</button>
          <button className="HomeScreen-btn">Lokalizacja</button>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
