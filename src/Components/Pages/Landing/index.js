import React from 'react';
import { MDBMask } from 'mdbreact';
// import { MDBMask, MDBIcon } from 'mdbreact';

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
  return styles.images[Math.floor(Math.random() * 5)]
  // return styles.images[4]
}

const Landing = ({ data }) => {
  // console.log("In Landing.js", data.name, data.role)

  return(
    <div className="bg" style={randImg()}>
      <MDBMask overlay='black-strong' className='flex-center'>
        <div>
          <h1 className='white-text h1-repsonsive flex-center'>
            <strong>{data.name}</strong>
          </h1>

          <h4 className='white-text h4-responsive flex-center'>
            <em>{data.role}</em>
          </h4>

          {/* <div className="flex-center socialLinks white-text">
            <MDBIcon fab icon="github-square" size="responsive" className='lightgrey-text m-5' fixed  />
            <MDBIcon icon="cat" size="responsive" className='lightgrey-text m-5' fixed  />
            <MDBIcon icon="coffee mdb-gallery-view-icon" size="responsive" className='lightgrey-text m-5' fixed  />
          </div> */}
        </div>
      </MDBMask>
    </div>
  )
}

export default Landing;