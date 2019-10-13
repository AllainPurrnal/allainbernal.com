import React from 'react';

//Dev Styles
import './App.css';

//Dev Page Components
import Navigation from './Components/Navigation';

//Dev Page Data
import websiteData from './websiteData';
import blogData from './Components/Pages/Home/blogData';

//Dev Pages
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import Portfolio from './Components/Pages/Portfolio';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Landing />
      {/* <Home /> */}
      <About />
      <Portfolio />
    </div>
  );
}

export default App;