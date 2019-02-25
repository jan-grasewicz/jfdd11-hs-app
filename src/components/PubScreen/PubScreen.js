import React, { Component } from 'react'
import SearchBar from "../SearchBar/SearchBar";

import './PubScreen.css'

class PubScreen extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="PubScreen-wrapper">
          <h1>PUB SCREEN</h1>
        </div>
      </div>
    )
  }
}

export default PubScreen
