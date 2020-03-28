import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';
// import me from './assets/profile1.jpg';

const About = ({ data }) => {
  // console.log("In About.js", data.about)
  
  return(
    <MDBContainer className="aboutPage text-justify" id="about">

      <MDBRow>

        <MDBCol id="headerAbout" size="5">
          <h4><em><strong>About</strong></em></h4>
        </MDBCol>
        
        <MDBCol md="7">
          <MDBRow>
            <MDBCol>
              <p id='desc'>{data.about}</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default About;