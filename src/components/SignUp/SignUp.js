import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField'

import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
      .then(() => {
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
              <TextField
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name}
                label="Name"
              />
              <TextField
                onChange={this.handleChange}
                type="text"
                name="surname"
                value={this.state.surname}
                label="Surname"
              />
              <TextField
                onChange={this.handleChange}
                type="email"
                name="email"
                value={this.state.email}
                label="Email adress"
              />
              <TextField
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                label="Password"
              />
              <TextField
                onChange={this.handleChange}
                type="text"
                name="phone"
                value={this.state.phone}
                label="Phone number"
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
            <div className="SignUp-form-button">
              <input onClick={this.handleSubmit} type="submit" name="submit" value='Sign Up'/>
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
