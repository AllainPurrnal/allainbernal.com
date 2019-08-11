import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

//Dev Styles ----------------------------------------
import './index.css';
import imageOne from './assets/bg1.jpg';
import imageTwo from './assets/bg2.JPG';

// Dev Pages ----------------------------------------
import Home from '../Home Page'

class Welcome extends Component {

  render() {
    const imageUrl = window.innerWidth >= 650 ? imageOne : imageTwo;

    return (
      <div className='App' style={{backgroundImage: `url(${imageOne})` }}>
        <div className='quote'>
          <h1 id='quotOne'> "What is better? </h1>
          <h1 id='quoteTwo'> To be born good or to overcome your evil nature through great effort?" </h1>
        </div>

        {/* <div className='background'>
          <img src={imageOne}></img>
        </div> */}
      </div>
    )
  }
}

export default Welcome;