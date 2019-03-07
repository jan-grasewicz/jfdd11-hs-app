import React, { Component } from 'react'
import './HamburgerMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../SideMenu';
import { withHamburgerMenu } from '../../contexts/HamburgerMenu/HamburgerMenuContext'

class HamburgerMenu extends Component {

  render() {
    const { isMenuOpen, handleMenuToggle, animationEnabled } = this.props.hamburgerContext
    return (
      <>
          <div
            className={`HamburgerMenu-side-menu ${animationEnabled ? 'animation-enabled' : ''} ${isMenuOpen
              ? "show"
              : "hide"}`
            }
          >
            <SideMenu />
          </div>
          {/* <div className='HamburgerMenu-menu-container'> */}
          <div onClick={handleMenuToggle} className="HamburgerMenu-menu">
            <FontAwesomeIcon
              icon={faBars}
              style={{ verticalAlign: "middle" }}
            />
                   </div>
          {/* </div> */}
      </>
    )
  }
}

export default withHamburgerMenu(HamburgerMenu)
