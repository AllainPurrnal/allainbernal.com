import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev styles
import './index.css';

// Dev data
import websiteData from '../../../websiteData';

function Skills() {
  let i = 0;
  console.log(websiteData.skill.length)

}

function Resume() {
  // Skills();

  return (
    <MDBContainer className="resume">
      <MDBRow className="technicalSkills">
        <MDBCol md='3'>
          <h4 id="resumeHeader"><em><strong>Skills</strong></em></h4>
        </MDBCol>

        <MDBCol md='9'>
          <h4><strong>Programming Languages</strong></h4>
          <h6>HTML5 / CSS3 / JavaScript</h6>

          <hr />

          <h4><strong>Frameworks</strong></h4>
          <h6>Bootstrap / jQuery / MDBootstrap / Mongoose / Node / React</h6>

          <hr />

          <h4><strong>Databases</strong></h4>
          <h6>Mongoose / MySQL</h6>

          <hr />

          <h4><strong>Tools & Platforms</strong></h4>
          <h6>Git / Postman / NPM / Trello / Yarn</h6>

        </MDBCol>
      </MDBRow>

      <MDBRow className="experience">
        <MDBCol md='3'>
          <h4 id="resumeHeader"><em><strong>Experience</strong></em></h4>
        </MDBCol>

        <MDBCol md='9'>
          <h4><strong><a to='https:/www.google.com'>Google</a></strong></h4>
          <h6>2017 August - 2019 August</h6>
          <p>Role: Software Developer</p>
          <p>Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.</p>
          
          <hr />

          <h4><strong><a to='https:/www.google.com'>Google</a></strong></h4>
          <h6>2017 August - 2019 August</h6>
          <p>Role: Software Developer</p>
          <p>Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Resume;