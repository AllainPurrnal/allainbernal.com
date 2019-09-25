import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, } from "mdbreact";
import { Link } from "react-router-dom";

//Dev Styles
import './index.css';

//Dev Pages
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import About from '../Pages/About';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    // const bgPink = {backgroundColor: '#e91e63'}
    // const container = {height: 1300}

    return(
      <div className='Navbar'>
        <MDBNavbar className="navbar" color="indigo" dark expand="md">
          <MDBNavbarBrand><Link to ={"/"}>
            <strong className="white-text">Muse</strong></Link>
          </MDBNavbarBrand>
          
          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>

              {/* This will direct users to their profile page */}
              <MDBNavItem>
                <Link to="/Home"
                className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                  Oink
                </Link>
                </MDBNavItem>

              {/* active sets the highlight to show which page user is in*/}
              <MDBNavItem> 
              <Link to="/Portfolio"
                className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                  Murr
                </Link>
              </MDBNavItem>

              {/* This will direct users to the Forum Page */}
              <MDBNavItem> 
                <Link to="/About"
                className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                  Meow
                </Link>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>  
    );
  }
}

export default Navigation;