import React from 'react';

//Dev Styles
import './App.css';

//Dev Page Components
import Navigation from './Components/Navigation';

//Dev Page Data
import websiteData from './websiteData';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Landing websiteData={websiteData}/>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;