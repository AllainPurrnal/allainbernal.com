import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBCardTitle } from "mdbreact";

//Dev Styles
import './index.css';
import exPage from './assets/bg2.JPG';
//Dev Page Components

function Portfolio() {
  return(
    <div className="portfolioPage" id="portfolio">
      <MDBContainer>

        <h4><em><strong>Current Works</strong></em></h4>
        <MDBRow className="projects">
          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <h4><em><strong>Previous Works</strong></em></h4>
        <MDBRow className="projects">
        <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
    
      </MDBContainer>
    </div>
  )
}

export default Portfolio;