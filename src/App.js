import React from 'react';

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
      {/* <Navigation /> */}
      <Landing />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;