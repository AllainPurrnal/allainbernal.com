import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

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
              <p id='desc'>{data.about}</p>
              <a href={data.social[0].link}>
                <Icon path={ mdiLinkedin } title="LinkedIn" id="svg" />
              </a>
              <a href={data.social[1].link}>
                <Icon path={ mdiGithub } title="Github" id="svg" />
              </a>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default About;