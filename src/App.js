import React, { Component } from "react";
import SearchBar from "../src/components/SearchBar";
import HomeScreen from "../src/components/HomeScreen";

class App extends Component {
    state = {
        searchFocused: false
    }
  render() {
    return (
      <>
        <SearchBar onFocus={() => this.setState({ searchFocused: true })} onBlur={() => this.setState({ searchFocused: false })}/>
        { this.state.searchFocused === false && <HomeScreen />}
      </>
    );
  }
}

export default App;
