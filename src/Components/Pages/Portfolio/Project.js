import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody } from 'mdbreact';
// import { MDBCol, MDBView, MDBMask, MDBCard, MDBCardImage, MDBCardBody } from 'mdbreact';

// Dev Styles
import './index.css';

// Dev Components
import MyIcon from '../../MyIcon';

const Project = ({ project }) => {
  // console.log("In Project.js", project.image)

  const iconPrint = project.tech.map((tech) =>
    <MyIcon icon={tech} id="projSvg"/>
  )

  return (
    <MDBCol className='flex-center' id="projectBody">
      <MDBCard style={{ width: "15rem" }}>
        <a href={project.link}>
          <MDBCardImage className='img-fluid' src={project.image} alt={project.name} overlay='black-slight' />
        </a>
        <MDBCardBody id="cardBody">
          <h5><strong>{project.name}</strong></h5>
          <h6>{project.description}</h6>
          <em>Built With: {iconPrint} </em>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Project;