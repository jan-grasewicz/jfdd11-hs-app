import React, { Component } from "react";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import "./LogIn.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    success: null,
    isGoogleSingUpInProgress: false
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ error: null, success: "Logged In" }))
      .then(setTimeout(this.back, 1000))
      .catch(error => this.setState({ error: error.message, success: null }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signUpWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() =>
        this.setState({
          isGoogleSingUpInProgress: true
        })
      )
      .catch(error => console.log(error));
  };

  componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged(user =>
        user ? this.props.history.push("/publist") : false
      );
  }

  render() {
    return (
      <>
        <div className="menu-container">
          <HamburgerMenu />
        </div>
        <div className="LogIn">
          {this.state.success !== "Logged In" && (
            <div className="LogIn-wrapper">
              <form className="LogIn-form">
                <TextField
                  className="LogIn-input"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  label="Email adress"
                />
                <TextField
                  className="LogIn-input"
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  label="Password"
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
              <button
                className="LogIn-google"
                onClick={this.signUpWithGoogle}
                disabled={this.state.isGoogleSingUpInProgress}
              >
                Log in with Google
              </button>
              <h2 className="LogIn-error">{this.state.error}</h2>
            </div>
          )}
          {this.state.success && <Redirect to="/publist" />}
        </div>
      </>
    );
  }
}

export default LogIn;
