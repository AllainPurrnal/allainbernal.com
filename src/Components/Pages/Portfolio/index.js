import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Dev Styles
import './index.css';

function Portfolio() {
  return(
    <div className="portfolioPage">
      <MDBContainer>
        <MDBRow className='projDiv'>
          <MDBCol md="12">
            
            <MDBRow className='subRow'>
              <MDBCol md="3">
                  <img src='http://placekitten.com/225/300' id='projImg'></img>
              </MDBCol>
              
              <MDBCol md="9">
                <MDBRow id='projTitle'>
                  <h4>Project: Example 1</h4>
                </MDBRow>
                
                <MDBRow id='projDesc'>
                  <p>
                    Cream, whipped plunger pot crema variety sit steamed caramelization. French press blue mountain white, affogato, acerbic that macchiato cream viennese. Cup decaffeinated cup, grounds, whipped, cinnamon single origin acerbic black wings.
                  </p>
                </MDBRow>

                <MDBRow id='projLinks'>
                  <a href='https://www.google.com'> github </a>
                  <a href='https://www.google.com'> preview </a>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className='projDiv'>
          <MDBCol md="12">
            <h4 id='title'>Project: Example 2</h4>
      
            <MDBRow className='subRow'>
              <MDBCol md="6">.col-md-6</MDBCol>
              <MDBCol md="6">.col-md-6</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow className='projDiv'>
          <MDBCol md="12">
            <h4 id='title'>Project: Example 3</h4>
            
            <MDBRow className='subRow'>
              <MDBCol md="6">.col-md-6</MDBCol>
              <MDBCol md="6">.col-md-6</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Portfolio;