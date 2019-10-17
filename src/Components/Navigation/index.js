import React from 'react';
import { MDBNavbar, MDBNavItem, MDBNavLink } from 'mdbreact';

//Dev Styles
import './index.css';

function Navbar() {
  return(
      <header>
        <MDBNavbar color='elegant-color-dark' scrolling='true' transparent='true' fixed='top' className="navbar justify-content-center">
          <MDBNavLink id="navlink" to="#about">
            <MDBNavItem>About</MDBNavItem>
          </MDBNavLink>
          <MDBNavLink id="navlink" to="#blog">
            <MDBNavItem>Blog</MDBNavItem>
          </MDBNavLink>
          <MDBNavLink id="navlink" to="#portfolio">
            <MDBNavItem>Portfolio</MDBNavItem>
          </MDBNavLink>
          <MDBNavLink id="navlink" to="#experience">
            <MDBNavItem>Experience</MDBNavItem>
          </MDBNavLink>
        </MDBNavbar>
      </header>
  )
}

export default Navbar;