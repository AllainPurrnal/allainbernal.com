import React from 'react';

//Dev Styles
import './App.css';

//Dev Components
import Navbar from './Components/Navigation';

//Dev Page Data
import data from './websiteData';

//Dev Pages
import Landing from './Components/Pages/Landing';
// import About from './Components/Pages/About';
import Resume from './Components/Pages/Resume';
// import Portfolio from './Components/Pages/Portfolio';

function App() {
  console.log("In App.js", data.skills)

  return (
    <div className="App">
      <Navbar />
      <Landing data={data} />
      {/* <About /> */}
      <Resume skills={data.skills} experience={data.experience} />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;