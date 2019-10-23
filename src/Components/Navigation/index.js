import React from 'react';
import { MDBNavbar, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

//Dev Styles
import './index.css';

function Navbar() {
  return(
      <header>
        <Router>
          <MDBNavbar color='elegant-color-dark' scrolling='true' transparent='true' fixed='top' className="navbar justify-content-center">
            <MDBNavItem id="navlink">
              <MDBNavLink id="navlink" to="#about">About</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem id="navlink">
              <MDBNavLink id="navlink" to="#skills">Skills</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem id="navlink">
              <MDBNavLink id="navlink" to="#portfolio">Portfolio</MDBNavLink>
            </MDBNavItem>
          </MDBNavbar>
        </Router>
      </header>
  )
}

export default Navbar;