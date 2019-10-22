import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';
import me from './assets/profile1.jpg';

function About() {
  return(
      <MDBContainer className="aboutPage text-justify" id="about">
      <MDBRow>

        <MDBCol className='' md="3">
          <div className="profileImage">
            <img src='http://placekitten.com/225/225' className="img-fluid rounded-circle" alt='me'></img>
            
          </div>
        </MDBCol>
        
        <MDBCol md="9">
          <MDBRow className="my-background"  id="background">
            <MDBCol>
              <h5 id="sectionHeader"><em><strong>About Me</strong></em></h5>
              
              <p id='desc'>
                A, con panna medium robusta single shot barista whipped, aged qui turkish, ut macchiato plunger pot roast brewed instant siphon and cream. Variety that arabica plunger pot, blue mountain foam con panna, affogato crema, so java, doppio frappuccino robusta body dark rich robusta id froth cortado dark. Breve, at organic so, cup coffee, cappuccino, carajillo barista, variety organic seasonal, redeye rich as cappuccino foam instant. Froth dripper medium, fair trade mug, at wings so, variety instant extra pumpkin spice cultivar. Single shot, cappuccino siphon froth, instant, iced froth, doppio in dark steamed body, that iced, beans americano, qui id foam espresso filter white. Robust, extraction froth, spoon macchiato a decaffeinated trifecta ristretto cream flavour redeye ristretto macchiato. Shop grinder, cream, cinnamon cup ut, cinnamon, black grounds shop ut at, eu, to go grounds acerbic galão single shot arabica, redeye aromatic strong robusta breve.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
          
      </MDBRow>
    </MDBContainer>
  )
}

export default About;