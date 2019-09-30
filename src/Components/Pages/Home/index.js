import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';

function Home() {
  return(
    <MDBContainer>
      <MDBCol>
        <MDBRow>
          <h5><strong> Post Title </strong></h5>
          <p> Published on <em>30 Sep 2019</em></p>
          <p className='text-justify'>
            Café au lait, rich bar foam barista caffeine shop plunger pot cinnamon crema robust plunger pot and lungo java. Steamed ut french press organic, so, fair trade turkish single shot eu beans aftertaste est siphon crema crema. Turkish extra organic grounds java breve pumpkin spice bar, sit coffee, foam, doppio cortado, frappuccino blue mountain french press milk crema whipped. Milk id that, qui, kopi-luwak cup steamed brewed frappuccino extraction body blue mountain acerbic seasonal americano coffee. At, grounds, redeye, foam cortado dark ristretto, robust, ut fair trade kopi-luwak arabica whipped.
          </p>
          <p><em> searchable tags </em></p>
        </MDBRow>

        <MDBRow>
          
        </MDBRow>
      </MDBCol>
    </MDBContainer>
  )
}

export default Home;