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
        <Router>
          <div>
            <Navigation/>
            <Route exact path="/" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            {/* <Route exact path="/About" component={About} /> */}
          </div>
        </Router>
    </div>
  );
}

export default App;