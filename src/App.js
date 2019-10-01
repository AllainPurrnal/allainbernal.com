import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Dev Styles
import './App.css';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';

//Dev Page Components
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navigation />
        <Route exact path="/" component={Landing} />
        <Route path="/Home" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/About" component={About} />
      </Router> */}
      <Landing />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;