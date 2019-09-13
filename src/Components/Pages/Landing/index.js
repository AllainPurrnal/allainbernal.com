import React from 'react';

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.jpg';

function Landing() {
  return(
    <div className='landingPage'> 
      <div className="bg" style={{backgroundImage: `url(${bg1})` }}>
        <div className='quote'>
          <h1 id='quotOne'> "What is better? </h1>
          <h1 id='quoteTwo'> To be born good or to overcome your evil nature through great effort?" </h1>
        </div>
      </div>
    </div>
  )
}

export default Landing;