import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev Styles
import './index.css';
// import me from './assets/profile1.jpg';

// Dev Components
import MyIcon from '../../MyIcon';

const About = ({ data }) => {
  console.log("In About.js", data.social)

  const iconPrint = data.social.map((social) =>
    <MyIcon icon={social.name} id="aboutSvg" />
  )
  
  return(
    <MDBContainer className="aboutPage text-justify" id="about">

      <MDBRow>
        <MDBCol id="headerAbout" size="5">
          <h4><em><strong>About</strong></em></h4>
        </MDBCol>
        
        <MDBCol md="7">
          <p id='desc'>{data.about}</p>
          {iconPrint}
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default About;