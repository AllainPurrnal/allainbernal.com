// While this code is simple, I would like to say I'm proud of being able to simplify something that was so complicated.
// During the first phase of this project, I had relied heavily on MDBootstrap to create and complete a personal website.
// The more I worked on this project, the more I began to realise that over reliance on frameworks could be a handicap in the future.
// Frameworks are very useful and make the lives of developers much easier, however; relying so heavily on frameworks at this point
//  will do nothing for my personal growth. 
// If I can work through problems on my own and find solutions, the more I can take away from a small piece of code.
// I find this especially important at this stage in my career as a developer. Please feel free to look around, have a wonderful day!

// The code, and project as a whole, is not yet complete.

import React from 'react';
import { MDBMask, MDBIcon } from 'mdbreact';

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import bg4 from './assets/bg4.jpg';
import bg5 from './assets/bg5.jpg';

const styles = {
  images:[ 
    {backgroundImage: `url(${bg1})`}, {backgroundImage: `url(${bg2})`}, {backgroundImage: `url(${bg3})`},
    {backgroundImage: `url(${bg4})`}, {backgroundImage: `url(${bg5})`}
  ]
}

function randImg() {
  // return styles.images[Math.floor(Math.random() * 5)]
  return styles.images[4]
}

function Landing() {
  return(
    <div className="bg" style={randImg()}>
      <MDBMask overlay='black-strong' className='flex-center'>
        <div>
          <h1 className='white-text h1-repsonsive flex-center'>
            <strong>Cat</strong>
          </h1>

          <h4 className='white-text h4-responsive flex-center'>
            <em>the professional chonk</em>
          </h4>

          <div className="flex-center socialLinks white-text">
            <MDBIcon fab icon="github-square" size="responsive" className='lightgrey-text m-5' fixed  />
            <MDBIcon icon="cat" size="responsive" className='lightgrey-text m-5' fixed  />
            <MDBIcon icon="coffee mdb-gallery-view-icon" size="responsive" className='lightgrey-text m-5' fixed  />
          </div>
        </div>
      </MDBMask>
    </div>
  )
}

export default Landing;
