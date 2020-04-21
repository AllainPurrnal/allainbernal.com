import React from 'react';
import { MDBCol, MDBView, MDBMask } from 'mdbreact';

// Dev Styles
import './index.css';

const ProjectByte = ({ byte }) => {
  console.log(byte)
  
  return (
    <MDBCol className="projects" md='4' >
      <MDBView hover>
        <img src={byte.image} className="img-fluid" alt={byte.name} />
        <a href={byte.link}>
          <MDBMask className="flex-center" overlay="black-strong">
            <p className="white-text">{byte.description}</p>
          </MDBMask>
        </a>
      </MDBView>
    </MDBCol>
  )
}

export default ProjectByte;