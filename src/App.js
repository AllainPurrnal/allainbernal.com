import React, { Component } from 'react';
import './App.css';

// Dev Pages ----------------------------------------
import Welcome from './Components/Pages/Welcome Page';
import Home from './Components/Pages/Home Page';
import About from './Components/Pages/About Page';
import Portfolio from './Components/Pages/Portfolio Page';
import Hobby from './Components/Pages/Hobby Page';

import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Backdrop from './Components/Backdrop';

class App extends Component {
  state = {
    sideNavOpen: false
  };
  
  sideNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideNavOpen: !prevState.sideNavOpen}
    });
  };

  render() {
    let sideNav;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideNav = <SideNav />;
      backdrop = <Backdrop />
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <Navbar navClickHandler={this.sideNavToggleClickHandler}/>
        {sideNav}
        {backdrop}

        <main style={{marginTop: '64px'}}>
          <p>This is a test!</p>
        </main>
      </div>
    );
  }
}

export default App;
