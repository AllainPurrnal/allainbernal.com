import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Home from '../Pages/Home Page';
import Portfolio from '../Pages/Portfolio Page';
import About from '../Pages/About Page';

import SideNavToggleButton from '../SideNav/SideNavToggleButton.js';

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle_button">
        <SideNavToggleButton click={props.navClickHandler}/>
      </div>
      <div className="toolbar_logo"><a href='/'>THE LOGO</a></div>
      <div className="spacer"></div>
        <div className="toolbar_nav_items">
          <ul>
            <li>
              {/* <a href="/Home">Home</a> */}
              <Link to="/Home">Home</Link>
            </li>
        
            <li>
              <a href="/Portfolio">Portfolio</a>
              {/* <Link to="/Portfolio">Portfolio</Link> */}
            </li>
        
            <li>
              <a href="/About">About</a>
              {/* <Link to="/About">About</Link> */}
            </li>
          </ul>
        </div>
    </nav>
  </header>
);

export default Navbar;