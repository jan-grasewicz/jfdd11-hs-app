import React, { Component } from 'react'

import './HamburgerMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu';

class HamburgerMenu extends Component {
state = {
  isMenuOpen: false,
  animationEnabled: false
}

sideMenuToggle = () => {
  this.setState({
    isMenuOpen: true,
    animationEnabled: true
  })
}

handleClickMenu = () => {
  this.setState({
    isMenuOpen: false
  })
}

handleMenuToggle = event => {
 event.stopPropagation()
 this.sideMenuToggle()
}

componentDidMount(){
  window.addEventListener('click', this.handleClickMenu)
}

componentWillUnmount(){
  window.removeEventListener('click', this.handleClickMenu)
}

  render() {
    return (
      <>
        <div className="HamburgerMenu-wrapper">
          <div
            className={`HamburgerMenu-side-menu ${this.state.animationEnabled ? 'animation-enabled' : ''} ${this.state.isMenuOpen
              ? "show"
              : "hide"}`
            }
          >
            <SideMenu />
          </div>
          </div>
          <div onClick={this.handleMenuToggle} className="HamburgerMenu-menu">
            <FontAwesomeIcon
              icon={faBars}
              style={{ verticalAlign: "middle" }}
            />
          </div>
      </>
    )
  }
}

export default HamburgerMenu
