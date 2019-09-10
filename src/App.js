import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/Portfolio';

//Dev Page Components
//To be used for navbars and whatever else thats universal for the website

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
