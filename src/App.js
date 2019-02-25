import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome Page';
import Home from './Components/Home Page';
import About from './Components/About Page';
import Portfolio from './Components/Portfolio Page';
import Hobby from './Components/Hobby Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
