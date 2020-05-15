import React from 'react';
import { MDBNavbar, MDBNavItem } from 'mdbreact';

//Dev Styles
import './index.css';

function Navbar() {
  return(
      <header>
        <MDBNavbar color='elegant-color-dark' scrolling transparent fixed='top' className="navbar justify-content-center" padding='0'>
          <MDBNavItem id="navlink">
            <a href="#">Home</a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#about">About</a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#resume">Resume</a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#portfolio">Portfolio</a>
          </MDBNavItem>
        </MDBNavbar>
      </header>
      
  )
}

export default Navbar;