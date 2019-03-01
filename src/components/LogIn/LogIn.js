import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField'

import "./LogIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
      .then(setTimeout(this.back, 1000))
      .catch(error => this.setState({ error: error.message, success: null }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  back = () => {
    this.props.history.push("/publist");
  };
  render() {
    return (
      <>
      <FontAwesomeIcon onClick={() =>this.props.history.push('/publist')} className="SignUp-back" icon={faChevronCircleLeft}/>
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
      </>
    );
  }
}

export default LogIn;
