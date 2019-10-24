import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev styles
import './index.css';

function Resume() {
  return (
    <MDBContainer className="resume">
      <MDBRow className="technicalSkills">
        <MDBCol md='3'>
          <h4 id="resumeHeader"><em><strong>Skills</strong></em></h4>
        </MDBCol>

        <MDBCol md='9'>
          <h4><strong>Programming Languages</strong></h4>
          <h6>HTML5 / CSS3 / JavaScript</h6>

          <h4><strong>Frameworks</strong></h4>
          <h6>Bootstrap / jQuery / MDBootstrap / Mongoose / Node / React</h6>

          <h4><strong>Databases</strong></h4>
          <h6>Mongoose / MySQL</h6>

          <h4><strong>Tools & Platforms</strong></h4>
          <h6>Git / Postman / NPM / Trello / Yarn</h6>

        </MDBCol>
      </MDBRow>

      <MDBRow className="">

      </MDBRow>
    </MDBContainer>
  )
}

export default Resume;