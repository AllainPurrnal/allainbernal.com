import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Dev Styles
import './index.css';

//Dev Page Components

function Portfolio() {
  return(
    <div className="portfolioPage">
      <MDBContainer>
        <MDBRow className='projDiv z-depth-1'>
          <MDBCol md="12">
            
            <MDBRow className='subRow'>
              <MDBCol md="5">
                  <img src='http://placekitten.com/384/216' id='projImg'></img>
              </MDBCol>
              
              <MDBCol md="7">
                <MDBRow id='projTitle'>
                  <h3>Project: Example 1</h3>
                </MDBRow>
                
                <MDBRow id='projDesc'>
                  <p>
                    Cream, whipped plunger pot crema variety sit steamed caramelization. French press blue mountain white, affogato, acerbic that macchiato cream viennese. Cup decaffeinated cup, grounds, whipped, cinnamon single origin acerbic black wings.
                  </p>
                </MDBRow>

                <MDBRow id='projLinks'>
                  <a href='https://www.google.com'> <em>github</em> </a>
                  <a href='https://www.google.com'> <em>preview</em> </a>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        
        <MDBRow className='projDiv z-depth-1'>
          <MDBCol md="12">
            
            <MDBRow className='subRow'>
            <MDBCol md="5">
                  <img src='http://placekitten.com/384/216' id='projImg'></img>
              </MDBCol>
              
              <MDBCol md="7">
                <MDBRow id='projTitle'>
                  <h3>Project: Example 2</h3>
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

        <MDBRow className='projDiv z-depth-1'>
          <MDBCol md="12">
            
            <MDBRow className='subRow'>
            <MDBCol md="5">
                  <img src='http://placekitten.com/384/216' id='projImg'></img>
              </MDBCol>
              
              <MDBCol md="7">
                <MDBRow id='projTitle'>
                  <h3>Project: Example 3</h3>
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
      </MDBContainer>
    </div>
  )
}

export default Portfolio;