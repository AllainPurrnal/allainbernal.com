import React from 'react';
import { MDBCol, MDBView, MDBMask } from 'mdbreact';

// Dev Styles
import './index.css';

const Project = ({ project }) => {
  // console.log("In Project.js", project.image)

  return (
    <MDBCol className="projDiv" size='4'>
      <MDBView hover>
        <img src={project.image} className="img-fluid" alt={project.name} />
        <a href={project.link}>
          <MDBMask className="flex-center" overlay="black-light">
            <p className="white-text">{project.description}</p>
          </MDBMask>
        </a>
      </MDBView>
    </MDBCol>
  )
}

export default Project;