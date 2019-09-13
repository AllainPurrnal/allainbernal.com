import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Dev Styles
import './App.css';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';

//Dev Page Components
//To be used for navbars and whatever else thats universal for the website

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
