import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption, MDBView, MDBMask, MDBIcon } from "mdbreact";

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
import bg3 from './assets/bg3.png';
import bg4 from './assets/bg4.png';

function Landing() {
  return(
<<<<<<< HEAD
    <>
      <MDBCarousel activeItem={1} length={5} showControls={false} showIndicators={false} interval={8000} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block img-fluid" src={bg1} alt="First slide" />
              
              <MDBMask overlay='black-light' className='flex-center'>
                <h1 className='white-text display-1'>
                  <strong>Cat</strong>
                </h1>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
=======
    <MDBCarousel activeItem={1} length={5} showControls={false} showIndicators={false} interval={8000} className="background">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img className="d-block w-100 img-fluid" src={bg1} alt="First slide" />
            <MDBMask overlay='black-light' />
          </MDBView>
>>>>>>> 1749759eeb5e9b470d2ec6a6b73ea721d04b1f41

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block img-fluid" src={bg2} alt="Second slide" />
              
              <MDBMask overlay='black-light' className='flex-center'>
                <h1 className='white-text display-1'>
                  <strong>Cat</strong>
                </h1>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block img-fluid" src={bg3} alt="Third slide" />
              
              <MDBMask overlay='black-light' className='flex-center'>
                <h1 className='white-text display-1'>
                  <strong>Cat</strong>
                </h1>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block img-fluid" src={bg4} alt="Fourth slide" />
              
              <MDBMask overlay='black-light' className='flex-center'>
                <h1 className='white-text display-1'>
                  <strong>Cat</strong>
                </h1>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="5">
            <MDBView>
              <img className="d-block img-fluid" src={bg4} alt="Fourth slide" />
              
              <MDBMask overlay='black-light' className='flex-center'>
                <h1 className='white-text display-1'>
                  <strong>Cat</strong>
                </h1>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBIcon icon="chevron-circle-down" />
          
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  )
}

export default Landing;