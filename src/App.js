import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


// Dev Styles --------------------------------------- 
import './Components/Pages/Welcome Page/assets/bg1.jpg';

// Dev Pages ----------------------------------------
import Welcome from './Components/Pages/Welcome Page';
import Home from './Components/Pages/Home Page';
import About from './Components/Pages/About Page';
import Portfolio from './Components/Pages/Portfolio Page';
// import Hobby from './Components/Pages/Hobby Page';

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

  backdropClickHandler = () => {
    this.setState({sideNavOpen: false});
  };

  render() {
    // let sideNav;
    let backdrop;

    if (this.state.sideNavOpen) {
      // sideNav = <SideNav />;
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <Router>
          <div>
            <Navbar navClickHandler={this.sideNavToggleClickHandler}/>
            <Route exact path="/">Welcome</Route>
            <Route exact path="/Home">Home</Route>
            <Route exact path="/Portfolio">Portfolio</Route>
            <Route exact path="/About">About</Route>
          </div>
        </Router>
        <SideNav show={this.state.sideNavOpen} />
        {backdrop}

        <main style={{marginTop: '64px'}}>
          <Router>
            <div>  
              <Route path="/" component={Welcome} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/About" component={About} />
            </div>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
