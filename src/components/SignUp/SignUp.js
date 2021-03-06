import React, { Component } from "react";
import firebase from "firebase";
import { withRouter, Redirect } from "react-router";
import TextField from "@material-ui/core/TextField";

import "./SignUp.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    isGoogleSingUpInProgress: false,
    error: null,
    success: null
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("users")
          .child(userId)
          .set({
            name: this.state.name,
            surname: this.state.surname,
            phone: this.state.phone
          });
        this.setState({ error: null, success: true });
      })
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
        <div className="SignUp-base">
          <div className="SignUp-form">
            <form onSubmit={this.handleSubmit}>
              <div className="SignUp-form-inputs">
                <TextField
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                  label="Name"
                  required={true}
                />
                <TextField
                  onChange={this.handleChange}
                  type="text"
                  name="surname"
                  value={this.state.surname}
                  label="Surname"
                  required={true}
                />
                <TextField
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  label="Email adress"
                  required={true}
                />
                <TextField
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  label="Password"
                  required={true}
                />
                <TextField
                  onChange={this.handleChange}
                  type="tel"
                  name="phone"
                  value={this.state.phone}
                  label="Phone number"
                />
              </div>
              <div className="SignUp-form-button">
                <input type="submit" name="submit" value="Sign in" />
              </div>
              <p className="SignUp-form-p">OR</p>
              <div className="SignUp-form-google">
                <button
                  onClick={this.signUpWithGoogle}
                  disabled={this.state.isGoogleSingUpInProgress}
                >
                  Sign in with Google
                </button>
              </div>
            </form>

            {this.state.success && <Redirect to="/publist" />}
            <h2 className="SignUp-error">{this.state.error}</h2>
          </div>
          <footer className="SignUp-footer">
            <p>
              Brewio will handle your data with caution and care. You don't have
              to worry about anything. Contact us anytime at
              brewio@brewioapp.com
            </p>
          </footer>
        </div>
      </>
    );
  }
}

export default withRouter(SignUp);
