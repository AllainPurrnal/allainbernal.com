import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';
import me from './assets/profile1.jpg';

function About() {
  return(
    <dic className='aboutPage'>
      <MDBContainer className="mt-5 text-justify">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <MDBRow className='background'>
                <MDBCol md="3">
                  <img src='http://placekitten.com/225/225' alt='me' height="250px"></img>
                </MDBCol>
                {/* src={me} */}
                <MDBCol md="9">
                  <p className='desc'>
                    Medium spoon cultivar doppio caramelization cinnamon organic. Aromatic, percolator aged id percolator mazagran whipped variety. Pumpkin spice fair trade aroma crema ristretto cultivar galão. Beans, caramelization, crema, grinder, sugar, grinder, galão white cup coffee variety. Robusta body qui as blue mountain cream that froth. Et con panna bar, so turkish barista caramelization and con panna. Variety mocha white decaffeinated redeye viennese grinder eu cappuccino kopi-luwak caramelization. Et froth, latte, spoon est coffee dripper as cinnamon sweet extraction. Froth to go a, so java crema filter aged cup sweet. Mocha, cultivar variety, caramelization as milk est aroma pumpkin spice. Cappuccino whipped at sweet froth, arabica decaffeinated caffeine ut mocha to go ristretto. Extraction java irish, viennese that doppio, french press, filter plunger pot foam dripper chicory. Froth cortado variety doppio con panna white cup, fair trade rich affogato java aromatic. And frappuccino doppio to go mazagran robust froth frappuccino. Percolator, frappuccino café au lait, extraction aftertaste eu ut breve. Doppio, flavour, con panna, organic, cream, single origin seasonal black carajillo mug macchiato. Coffee, mug saucer coffee id blue mountain to go bar cortado pumpkin spice robusta. Sit decaffeinated single shot wings, arabica fair trade doppio aged robusta. Eu percolator aromatic at french press, breve rich chicory white percolator roast. Dripper, sit doppio carajillo variety aromatic plunger pot.
                  </p>
                </MDBCol>
              </MDBRow>
              
              <hr className="my-2" />

              <MDBRow className='experience'>
                <p>
                  It uses utility classes for typgraphy and spacing to space content out
                  within the larger container.
                </p>
              </MDBRow>

              <MDBRow className='contact'>
                <p>

                </p>
              </MDBRow>

            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </dic>
  )
}

export default About;