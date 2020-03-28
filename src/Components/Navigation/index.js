import React from 'react';
import { MDBNavbar, MDBNavItem } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

//Dev Styles
import './index.css';

function Navbar() {
  return(
      <header>
        <MDBNavbar color='elegant-color-dark' scrolling='true' transparent='true' fixed='top' className="navbar justify-content-center" padding='0'>
          <MDBNavItem id="navlink">
            <a href="#about"><span>About</span></a>
          </MDBNavItem>

          <MDBNavItem id="navlink">
            <a href="#skills"><span>Skills</span></a>
          </MDBNavItem>

          {/* <MDBNavItem id="navlink">
            <a href="#portfolio"><span>Portfolio</span></a>
          </MDBNavItem> */}
        </MDBNavbar>
      </header>
      
  )
}

export default Navbar;