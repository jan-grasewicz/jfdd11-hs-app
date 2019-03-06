import React, { Component } from "react";
import firebase from "firebase";

const AuthContext = React.createContext({ user: null });
const { Provider, Consumer } = AuthContext;

export default class AuthContextProvider extends Component {
  state = {
    user: null,
    signIn: (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password),
    signOut: () => firebase.auth().signOut()
  };

  componentDidMount() {
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ user }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withAuth = Component => props => {
  return (
    <Consumer>{value => <Component {...props} authContext={value} />}</Consumer>
  );
};
