import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";

//Dev Styles
import './index.css';
import bg1 from './assets/bg1.jpg';

function Landing() {
  return(
    <MDBContainer className="mt-5 text-center landingPage">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center bgImg">

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />

          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Landing;