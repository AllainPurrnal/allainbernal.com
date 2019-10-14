import React, { Component } from "react";
import { MDBNav, MDBNavItem } from 'mdbreact';

//Dev Styles
import './index.css';

function Navigation() {
  return (
    <MDBNav color='pink' double fixed='top' className="navbar justify-content-center">
      <MDBNavItem to="#about">About</MDBNavItem>
      <MDBNavItem to="#blog">Blog</MDBNavItem>
      <MDBNavItem to="#portfolio">Portfolio</MDBNavItem>
      <MDBNavItem to="#experience">Experience</MDBNavItem>
      <MDBNavItem to="#resume">Resume</MDBNavItem>
    </MDBNav>
  )
}

export default Navigation;