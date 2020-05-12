import React from 'react';
import { MDBNavbar, MDBNavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

//Dev Styles
import './index.css';

function Navbar() {
  return(
      <header>
        <MDBNavbar color='elegant-color-dark' scrolling transparent fixed='top' className="navbar justify-content-center" padding='0'>
        <Router>
          <MDBNavItem id="navlink">
            <a href="#about">About</a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#resume">Resume</a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#portfolio">Portfolio</a>
          </MDBNavItem>
        </Router>
        </MDBNavbar>
      </header>
      
  )
}

export default Navbar;