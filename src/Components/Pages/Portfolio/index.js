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

        <h4><em><strong>Current Works</strong></em></h4>
        <MDBRow>
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={exPage} waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="https://www.google.com">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
        </MDBRow>

        <h4><em><strong>Previous Works</strong></em></h4>
        <MDBRow>
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
            
            <MDBCard className='projDiv z-depth-0' style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Project Title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                {/* <MDBBtn outline href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
        </MDBRow>
    
      </MDBContainer>
    </div>
  )
}

export default Portfolio;