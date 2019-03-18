import React, { Component } from 'react';
import './App.css';

// Dev Pages ----------------------------------------
import Welcome from './Components/Pages/Welcome Page';
import Home from './Components/Pages/Home Page';
import About from './Components/Pages/About Page';
import Portfolio from './Components/Pages/Portfolio Page';
import Hobby from './Components/Pages/Hobby Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
