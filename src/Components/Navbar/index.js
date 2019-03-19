import React from 'react';

import './index.css';
import SideNavToggleButton from '../SideNav/SideNavToggleButton.js';

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <SideNavToggleButton click={props.navClickHandler}/>
      </div>
      <div className="toolbar_logo"><a href='/'>THE LOGO</a></div>
      <div className="spacer"></div>
      <div className="toolbar_nav_items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;