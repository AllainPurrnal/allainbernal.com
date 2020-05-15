import React from 'react';
import { MDBCol, MDBView, MDBMask, MDBCard } from 'mdbreact';

// Dev Styles
import './index.css';

const ProjectByte = ({ byte }) => {
  // console.log(byte);
  
  return (
    <MDBCol className="flex-center">
      <MDBCard style={{ width: "10rem" }}>
        <MDBView hover>
          <img src={byte.image} className="img-fluid" alt={byte.name} />
          <a href={byte.link}>
            <MDBMask className="flex-center" overlay="black-strong">
              <p className="white-text">{byte.description}</p>
            </MDBMask>
          </a>
        </MDBView>
      </MDBCard>
    </MDBCol>
  )
}

export default ProjectByte;