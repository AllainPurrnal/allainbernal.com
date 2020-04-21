import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Dev Styles
import './index.css';

// Dev Components
import Project from './Project.js';
import ProjectByte from './ProjectByte';

const Portfolio = ({ portfolio, bytes }) => {
  // console.log("In Portfolio.js", portfolio)

  const projPrint =  portfolio.map((project, id) =>
    <Project key={project.id} project={project} />
  )

  const bytePrint = bytes.map((byte, id) => 
    <ProjectByte key={byte.id} byte={byte} />
  )

  return(
    <MDBContainer className="portfolioSection" id="portfolio">
      <MDBRow>
          <MDBCol id="portfolioHeader" size='5'>
            <h4><em><strong>Portfolio</strong></em></h4>
          </MDBCol>
      </MDBRow>
  
      <MDBRow className="projects">
          {projPrint}
      </MDBRow>

      <MDBRow>
        {/* {bytePrint} */}
      </MDBRow>
    </MDBContainer>
  )
}

export default Portfolio;