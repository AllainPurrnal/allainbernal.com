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
      <MDBCard style={{ width: "20rem" }}>
        <a href={project.link}>
          <MDBCardImage className='img-fluid' src={project.image} waves={false} overlay='black-light' />
        </a>
        <MDBCardBody id="cardBody">
          <h5><strong>{project.name}</strong></h5>
          <h6>{project.description}</h6>
          <em>Built With: {iconPrint} </em>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )

  // return (
  //   <MDBCol className="projects" md='4' >
  //     <MDBView hover>
  //       <img src={project.image} className="img-fluid" alt={project.name} />
  //       <a href={project.link}>
  //         <MDBMask className="flex-center" overlay="black-strong">
  //           <p className="white-text">{project.description}</p>
  //         </MDBMask>
  //       </a>
  //     </MDBView>
  //   </MDBCol>
  // )

  // return (
  //   <MDBRow className="projects">
  //     <MDBCol size='1' />

  //     <MDBCol id="projectImage" size='3'>
  //       <img src={project.image} alt={project.name} className='img-fluid' />
  //     </MDBCol>

  //     <MDBCol size='1' />

  //     <MDBCol id="projectBody" size='7'>
  //       <h4><strong><a href={project.link}>{project.name}</a></strong></h4>
  //       <h5>{project.description}</h5>
  //       <p>Built With: {iconPrint} </p>
  //     </MDBCol>
  //   </MDBRow>
  // )
}

export default Project;