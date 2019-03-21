import React, { Component } from 'react';

// Page Components ----------------------------------
import { slide as Menu } from 'react-burger-menu';

// Dev Styles ---------------------------------------
import './index.css';

class Home extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div> 
        {/* <nav><Navbar /></nav> */}

        <h1>This is the Home Page!</h1>
        {/* <Menu isOpen={ false } width={ '20%' }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Portfolio</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu> */}

      </div>
    )
  }
}

export default Home;