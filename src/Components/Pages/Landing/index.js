import React from 'react';
import { MDBMask } from 'mdbreact';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.webp';
import bg2 from './assets/bg2.webp';
import bg3 from './assets/bg3.webp';
import bg4 from './assets/bg4.webp';
import bg5 from './assets/bg5.webp';

const styles = {
  images:[ 
    {backgroundImage: `url(${bg1})`}, {backgroundImage: `url(${bg2})`}, {backgroundImage: `url(${bg3})`},
    {backgroundImage: `url(${bg4})`}, {backgroundImage: `url(${bg5})`}
  ]
}

const randImg = () => styles.images[Math.floor(Math.random() * 5)]

const Landing = ({ data }) => {
  // console.log("In Landing.js", data.name, data.role)

  return(
    <div className="bg" style={randImg()}>
      <MDBMask overlay='black-strong' className='flex-center'>
        <div>
          <h1 className='h1-repsonsive d-flex flex-center'>
            <strong>{data.name}</strong>
          </h1>

          <h4 className='h4-responsive d-flex flex-center'>
            <em>{data.role}</em>
          </h4>
        
          <div className='d-flex flex-center'>
            <a href="#about">
              <Icon path={mdiChevronDown}
                title="Learn More"
                size={2}
                id='keyboard-arrow-down' />
            </a>
          </div>
        </div>
      </MDBMask>
    </div>
  )
}

export default Landing;