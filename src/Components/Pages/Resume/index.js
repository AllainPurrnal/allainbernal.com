import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev styles
import './index.css';

//Dev Page Data
import data from'../../../websiteData.js'

const skills = (data) => {

  // This loops through the skill types
  for (let i = 0; i < data.length; i++) {
    let type = data[i].skillType;
    console.log(type)

    // This loops through the skill names in each type
    for (let j = 0; j < data[i].skillName.length ; j++) {
      let name = data[i].skillName[j]
      console.log(name)
    }

  }
}

function Resume() {

  return (
    <MDBContainer className="resume" id ="skills">
      <MDBRow className="skills">
        <MDBCol id="header" size='5'>
          <h4><em><strong>Skills</strong></em></h4>
        </MDBCol>

        <MDBCol md='7'>
          {/* {skills(data.skill)} */}

          <h4><strong>{data.skill[0].skillType}</strong></h4>
          <h6>{data.skill[0].skillName[0]} / {data.skill[0].skillName[1]} / {data.skill[0].skillName[2]}</h6>

          <h4><strong>{data.skill[1].skillType}</strong></h4>
          <h6>{data.skill[1].skillName[0]} / {data.skill[1].skillName[1]} / {data.skill[1].skillName[2]} / {data.skill[1].skillName[3]} / {data.skill[1].skillName[4]} / {data.skill[1].skillName[5]}</h6>

          <h4><strong>{data.skill[2].skillType}</strong></h4>
          <h6>{data.skill[2].skillName[0]}</h6>

          <h4><strong>{data.skill[3].skillType}</strong></h4>
          <h6>{data.skill[3].skillName[0]} / {data.skill[3].skillName[1]} / {data.skill[3].skillName[2]} / {data.skill[3].skillName[3]} / {data.skill[3].skillName[4]} / {data.skill[3].skillName[5]}</h6>

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