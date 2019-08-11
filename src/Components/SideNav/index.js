import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './index.css'

import Home from '../Pages/Home Page';
import Portfolio from '../Pages/Portfolio Page';
import About from '../Pages/About Page';

const SideNav = props => {
  let navClasses = 'side-nav';

  if (props.show) {
    navClasses = 'side-nav open';
  }
  
  return (
    <div>
      <nav className={navClasses}>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>

          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>

          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;