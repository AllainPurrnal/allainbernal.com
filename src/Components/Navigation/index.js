import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

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
    const bgPink = {backgroundColor: '#e91e63'}
    const container = {height: 1300}

    return(
      <Router>
        <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">

          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink exact to="/">Home</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/Portfolio">Portfolio</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/About">About</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navigation;