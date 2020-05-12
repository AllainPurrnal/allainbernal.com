import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// Dev styles
import './index.css';

// Dev Components
import Skills from './Skills.js';
import Experience from './Experience.js';

const Resume = ({ skills, experience }) => {
  // console.log("In Resume.js", skills, experience)

  let skillsPrint = skills.map((skill, id) => 
    <Skills key={skill.id} skill={skill} />
  )

  let expPrint = experience.map((exp, id) =>
    <Experience key={exp.id} exp={exp} />
  )

  return (
    <MDBContainer className="resumeSection" id ="resume">
      <MDBRow className="skills">
        <MDBCol id="header" size='5'>
          <h4><em><strong>Skills</strong></em></h4>
        </MDBCol>

        <MDBCol md='7'>
          {skillsPrint}
        </MDBCol>
      </MDBRow>

      <hr />

      <MDBRow className="experience">
        <MDBCol id="header" size='5'>
          <h4><em><strong>Experience</strong></em></h4>
        </MDBCol>

        <MDBCol md='7'>
          {expPrint}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Resume;