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
      .catch(error => this.setState({ error: error, success: null }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="LogIn">
        <div className="LogIn-wrapper">
          <form>
            <input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="Email adress"
            />
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
            />
            <div className="LogIn-button">
              <button onClick={this.handleSubmit} type="submit" name="submit">
                Log In
              </button>
            </div>
          </form>
          <p className="LogIn-or">OR</p>

          <div className="LogIn-google">
            <button>Log in with Google</button>
          </div>

          {this.state.success && (
            <h1>
              Loged In <Link to="/publist">Go back</Link>
            </h1>
          )}
          <h2>{this.state.error}</h2>
        </div>
      </div>
    );
  }
}

export default LogIn;
