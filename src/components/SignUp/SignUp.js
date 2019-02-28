import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

import "./SignUp.css";
import SideMenu from "../SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    isGoogleSingUpInProgress: false,
    isOwner: false,
    error: null,
    success: null
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("users")
          .child(userId)
          .set({
            name: this.state.name,
            surname: this.state.surname,
            phone: this.state.phone,
            isOwner: this.state.isOwner
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

  render() {
    return (
      <>

          <FontAwesomeIcon onClick={() =>this.props.history.push('/publist')} className="SignUp-back" icon={faChevronCircleLeft}/>
 
        <div className="SignUp-base">
          <div className="SignUp-form">
            <div className="SignUp-form-inputs">
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="surname"
                value={this.state.surname}
                placeholder="Surname"
              />
              <input
                onChange={this.handleChange}
                type="email"
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
              <input
                onChange={this.handleChange}
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Phone number"
              />
              <p>I'm an owner</p>
              <input
                onChange={() =>
                  this.state.isOwner
                    ? this.setState({ isOwner: false })
                    : this.setState({ isOwner: true })
                }
                type="checkbox"
                name="isOwner"
                value={this.state.isOwner}
              />
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
            <div className="SignUp-form-button">
              <input onClick={this.handleSubmit} type="submit" name="submit" />
            </div>
            {this.state.success && (
              <h1>
                Account created! <Link to="/publist">Go back</Link>
              </h1>
            )}
            <h2>{this.state.error}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
