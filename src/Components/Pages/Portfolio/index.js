import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Dev Styles
import './index.css';

// Dev Components
import Project from './Project.js';

const Portfolio = ({ portfolio }) => {
  // console.log("In Portfolio.js", portfolio)

  const projPrint =  portfolio.map((project, id) =>
    <Project key={project.id} project={project} />
  )

  return(
    <MDBContainer className="portfolioPage" id="portfolio">
      <MDBRow className="projects" id="header">
          <MDBCol size='5'>
            <h4><em><strong>Portfolio</strong></em></h4>
          </MDBCol>
      </MDBRow>
  
      <MDBRow>
        {projPrint}
      </MDBRow>

    </MDBContainer>
  )
}

export default Portfolio;