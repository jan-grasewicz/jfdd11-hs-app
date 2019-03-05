import React, { Component } from "react";

const AuthContext = React.createContext({ user: null });
const { Provider, Consumer } = AuthContext;

class AuthContextProvider extends Component {
  state = {
    user: null
  };

  componentDidMount() {}

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const withAuth = Component => props => {
  return (
    <Consumer>{value => <Component {...props} authContext={value} />}</Consumer>
  );
};
