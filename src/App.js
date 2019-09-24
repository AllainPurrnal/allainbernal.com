import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Dev Styles
import './App.css';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';
import Navigation from './Components/Navigation';

//Dev Page Components

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navigation />
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route path='/Portfolio' component={Portfolio} /> */}
        {/* <Route path='/About' component={About} /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
