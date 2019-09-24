import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

//Dev Styles
import './index.css';
import exPage from './assets/bg2.JPG';
//Dev Page Components

function Portfolio() {
  return(
    <div className="portfolioPage">
      <MDBContainer>

        <h3>Current Works</h3>
        <MDBRow>
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={exPage} waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="https://www.google.com">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
        </MDBRow>
    
        <hr></hr>
        <h3>Previous Works</h3>
        <MDBRow>
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            
            <MDBCard className='projDiv' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
        </MDBRow>
    
      </MDBContainer>
    </div>
  )
}

export default Portfolio;