import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

import "./LogIn.css";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    success: null
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => this.setState({ error: null, success: "Logged In" }))
      .catch(error => this.setState({ error: error.message, success: null }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="LogIn">
        {this.state.success !== "Logged In" && (
          <div className="LogIn-wrapper">
            <form className="LogIn-form">
              <input
                className="LogIn-input"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                placeholder="Email adress"
              />
              <input
                className="LogIn-input"
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
              />
              <button
                className="LogIn-button"
                onClick={this.handleSubmit}
                type="submit"
                name="submit"
              >
                Log In
              </button>
            </form>
            <p className="LogIn-or">OR</p>
            <button className="LogIn-google">Log in with Google</button>
            <h2>{this.state.error}</h2>
          </div>
        )}
        {this.state.success === "Logged In" && (
          <h1>
            Logged In <Link to="/publist">Go back</Link>
          </h1>
        )}
      </div>
    );
  }
}

export default LogIn;
