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
              <a href="#about"><span>About</span></a>
            </MDBNavItem>

            <MDBNavItem id="navlink">
              <a href="#skills"><span>Skills</span></a>
            </MDBNavItem>

            <MDBNavItem id="navlink">
              <a href="#portfolio"><span>Portfolio</span></a>
            </MDBNavItem>
          </MDBNavbar>
        </Router>
      </header>
  )
}

export default Navbar;