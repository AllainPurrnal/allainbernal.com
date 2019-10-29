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
      <MDBRow className="skills">
        <MDBCol id="header" size='5'>
          <h4><em><strong>Skills</strong></em></h4>
        </MDBCol>

        <MDBCol md='7'>
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

      <hr />

      <MDBRow className="experience">
        <MDBCol id="header" size='5'>
          <h4><em><strong>Experience</strong></em></h4>
        </MDBCol>

        <MDBCol md='7'>
          <h4><strong><a href="https:/www.google.com">Dark Roast</a></strong></h4>
          <h5>Role: <em>Coffee Developer</em></h5>
          <h6>2017 August - 2019 August</h6>
          <p>Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.</p>
          
          <div />

          <h4><strong><a href="https:/www.google.com">Medium Roast</a></strong></h4>
          <h5>Role: <em>Software Developer</em></h5>
          <h6>2017 July - 2017 August</h6>
          <p>Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.</p>
          
          <div />

          <h4><strong><a href="https:/www.google.com">Light Roast</a></strong></h4>
          <h5>Role: <em>Caffeine Addict</em></h5>
          <h6>2015 August - 2017 July</h6>
          <p>Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.</p>
          </MDBCol>
      </MDBRow>

      <hr />
    </MDBContainer>
  )
}

export default Resume;