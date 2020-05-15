import React from 'react';

//Dev Styles
import './App.css';

//Dev Components
import Navbar from './Components/Navigation';

//Dev Pages
import Landing from './Components/Pages/Landing';
import About from './Components/Pages/About';
import Resume from './Components/Pages/Resume';
import Portfolio from './Components/Pages/Portfolio';
// import Footer from './Components/Footer';

//Dev Page Data
import data from './websiteData';

function App() {
  // console.log("In App.js", data)

  return (
    <div className="App">
      <Navbar />
      <Landing data={data} />

      <div id="appAbout">
        <About data={data} />
      </div>

      <Resume skills={data.skills} experience={data.experience} />
      
      <div id="appPortfolio">
        <Portfolio portfolio={data.portfolio} bytes={data.projectByte} />
      </div>

      {/* <div id="appFooter">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;