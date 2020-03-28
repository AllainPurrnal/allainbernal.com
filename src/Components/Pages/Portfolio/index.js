import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBCardTitle } from "mdbreact";

//Dev Styles
import './index.css';
import projOne from './assets/mywebsite.webp';
import projTwo from './assets/clickygame.webp';

//Dev Page Data
import data from'../../../websiteData.js';

const Portfolio = ({ portfolio }) => {
  // console.log("In Portfolio.js", portfolio
  return(
    <div className="portfolioPage" id="portfolio">
      <MDBContainer>
        <h4><em><strong>Projects</strong></em></h4>
        <MDBRow className="projects">
        <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={projOne} className="img-fluid" alt="allainbernal.com landing page" />
                <a href={data.portfolio[0].projectLink}>
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">{data.portfolio[0].projectDesc}</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={projTwo} className="img-fluid" alt="" />
                <a href={data.portfolio[1].projectLink}>
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">{data.portfolio[1].projectDesc}</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol>

          {/* <MDBCol className='projDiv' md="4">
            <MDBView hover>
              <img src={exPage} className="img-fluid" alt="" />
                <a href="http://www.google.com">
                  <MDBMask className="flex-center" overlay="black-light">
                    <p className="white-text">Brief project description</p>
                  </MDBMask>
                </a>
            </MDBView>
          </MDBCol> */}
        </MDBRow>
    
      </MDBContainer>
    </div>
  )
}

export default Portfolio;