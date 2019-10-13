import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption, MDBView, MDBMask, MDBCol, MDBRow } from "mdbreact";

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';
import bg3 from './assets/bg3.png';
import bg4 from './assets/bg4.png';

function Landing() {
  return(
    <MDBCarousel activeItem={1} length={5} showControls={false} showIndicators={false} interval={8000} className="background">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img className="d-block w-100 img-fluid" src={bg1} alt="First slide" />
            <MDBMask overlay='black-light' />
          </MDBView>

          <MDBCarouselCaption>
            <h1>
              <em>"Nothing in this world can take the place of persistence"</em>
            </h1>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img className="d-block w-100" src={bg2} alt="Second slide" />
            <MDBMask overlay='black-light' />
          </MDBView>

          <MDBCarouselCaption>
            <h1>
              <em>"Talent will not: nothing is more common than unsuccessful men with talent."</em>
            </h1>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="3">
          <MDBView>
            <img className="d-block w-100" src={bg3} alt="Third slide" />
            <MDBMask overlay='black-light' />
          </MDBView>

          <MDBCarouselCaption>
            <h1>
              <em>"Genius will not; unrewarded genius is almost a proverb."</em>
            </h1>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="4">
          <MDBView>
            <img className="d-block w-100" src={bg4} alt="Fourth slide" />
            <MDBMask overlay='black-light' />
          </MDBView>

          <MDBCarouselCaption>
            <h1>
              <em>"Education will not: the world is full of educated derelicts."</em>
            </h1>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="5">
          <MDBView>
            <img className="d-block w-100" src={bg4} alt="Fourth slide" />
            <MDBMask overlay='black-light' />
          </MDBView>

          <MDBCarouselCaption>
            <h1>
              <em>"Persistence and determination alone are omnipotent."</em>
            </h1>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Landing;