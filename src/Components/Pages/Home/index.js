import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';

function Home() {
  return(
    <div>
    <MDBRow className="blog">
      <MDBCol size='6'>
        <MDBRow>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
        </MDBRow> {/* End of Row 1 */}
        
        <MDBRow>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
        </MDBRow> {/* End of Row 2 */}
        
        <MDBRow>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
          <MDBCol className="pl1" size='4'>
            <img src="http://placekitten.com/250/200" alt="placeholder" />
          </MDBCol>
        </MDBRow> {/* End of Row 3 */}
      </MDBCol>
      
      <MDBCol className='text-justify' size='6'>    
        <div className="blogPost">
          <h5 id="postTitle"><strong> Post Title </strong></h5>
          <p id="postDate"> Published on <em>01 Oct 2019</em></p>
          <p id="postEntry">
            Con panna acerbic macchiato, black, eu bar grinder sit, bar mazagran et, cortado cultivar siphon shop saucer decaffeinated. Milk, arabica filter skinny spoon, to go saucer, percolator id, frappuccino mazagran macchiato viennese to go chicory, and latte roast crema cappuccino plunger pot variety as foam. Roast, acerbic skinny, cortado, crema crema body cortado, cappuccino saucer instant cultivar decaffeinated cortado robusta iced sit caffeine foam iced medium filter. Brewed latte redeye coffee, cinnamon kopi-luwak espresso café au lait, percolator french press a grounds robusta, cup, aromatic galão mocha redeye irish. Grounds body café au lait, cream cortado, caramelization, single shot flavour, cultivar steamed a white spoon, french press, rich, spoon whipped shop eu crema. Shop latte, pumpkin spice single shot aroma pumpkin spice redeye irish arabica wings saucer dark espresso, filter, cinnamon whipped eu black cinnamon. Skinny seasonal cortado sit, cup, cortado french press grinder, single shot steamed, cinnamon, beans whipped, strong at as crema frappuccino french press. Redeye cortado pumpkin spice ut, acerbic at, variety rich java, con panna sugar flavour french press iced chicory shop mocha cup filter grounds variety latte. Foam, filter coffee, cinnamon so in whipped siphon single shot, caramelization, eu robusta crema cream eu, arabica, mug shop ut percolator chicory arabica.
          </p>
          <p id="postTag"><em> searchable tags </em></p>
        </div>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Home;