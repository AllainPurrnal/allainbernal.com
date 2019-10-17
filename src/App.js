import React from 'react';

//Dev Styles
import './App.css';

//Dev Page Components
import Navbar from './Components/Navigation';

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
<<<<<<< HEAD
      {/* <Navigation /> */}
      <Landing />
      {/* <Home /> */}
      <About />
      <Portfolio />
=======
      <Navbar />
      <Landing websiteData={websiteData}/>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Portfolio /> */}
>>>>>>> 96b31e166c198dcade63972dadd8cd77305b56ab
    </div>
  );
}

export default App;