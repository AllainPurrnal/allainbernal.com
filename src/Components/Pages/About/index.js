import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev Styles
import './index.css';
// import me from './assets/profile1.jpg';

// Dev Components
import MyIcon from '../../MyIcon';

const About = ({ data }) => {
  // console.log("In About.js", data.social)

  const iconPrint = data.social.map((social) =>
    <MyIcon icon={social.name} link={social.link} id="aboutSvg" />
  )
  
  return(
    <MDBContainer className="aboutSection text-justify" id="about">

      <MDBRow id="selfie">
        <img src={data.selfie} alt="Allain's selfie!" className='rounded-circle img-fluid z-depth-1 ' />
      </MDBRow>

      <MDBRow className="aboutMe">
        <MDBCol id="aboutHeader" size="5">
          <h4><em><strong>About</strong></em></h4>
        </MDBCol>
        
        <MDBCol md="7">
          <p id='desc'>{data.about}</p>
        </MDBCol>
      </MDBRow>

      <hr />

      <MDBRow>
        <MDBCol id="aboutHeader" size="5">
          <h4><em><strong>Background</strong></em></h4>
        </MDBCol>
        
        <MDBCol md="7">
          <p id='desc'>{data.background}</p>
        </MDBCol>
      </MDBRow>

      <hr />

      <MDBRow className='justify-content-center'>
        {iconPrint}
      </MDBRow>

    </MDBContainer>
  )
}

export default About;