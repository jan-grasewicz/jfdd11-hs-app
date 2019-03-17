import React, { Component } from "react";

const HamburgerMenuContext = React.createContext();

const { Provider, Consumer } = HamburgerMenuContext;

export default class HamburgerMenuContextProvider extends Component {
  state = {
    isMenuOpen: false,
    isAdvancedSearchOpen: false,
    animationEnabled: false,
    advToggle: () => this.handleClickAdvancedSearch(),
    handleMenuToggle: event => {
      event.stopPropagation();
      this.setState({
        isMenuOpen: !this.state.isMenuOpen,
        animationEnabled: true,
        isAdvancedSearchOpen: false
      });
    },
    advancedSearchToggle: event => {
      event.stopPropagation();
      this.setState({
        isAdvancedSearchOpen: !this.state.isAdvancedSearchOpen,
        isMenuOpen: false
      });
    },
    handleAdvancedSearchToggle: event => {
      event.stopPropagation();
    }
  };

  handleClickAdvancedSearch = event => {
    this.setState({ isAdvancedSearchOpen: false });
  };

  handleClickMenu = event => {
    this.setState({ isMenuOpen: false });
  };

  componentDidMount() {
    window.addEventListener("click", this.handleClickAdvancedSearch);
    window.addEventListener("click", this.handleClickMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickAdvancedSearch);
    window.removeEventListener("click", this.handleClickMenu);
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withHamburgerMenu = Component => props => {
  return (
    <Consumer>
      {value => <Component {...props} hamburgerContext={value} />}
    </Consumer>
  );
};
