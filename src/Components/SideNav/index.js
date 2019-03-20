import React from 'react';
import './index.css'

const SideNav = props => {
  let navClasses = 'side-nav';

  if (props.show) {
    navClasses = 'side-nav open';
  }
  
  return (
    <nav className={navClasses}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;