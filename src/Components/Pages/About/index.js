import React from 'react';
import { MDBSticky, MDBStickyContent, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';
import me from './assets/profile1.jpg';

function About() {
  return(
    <dic className='aboutPage'>
      <MDBContainer className="mt-5 text-justify">
        <MDBRow>
          <MDBCol md="3">
            <img src='http://placekitten.com/250/250' className="img-fluid z-depth-1 rounded-circle" alt='me' height="250px"></img>
          </MDBCol>

          <MDBCol md="9">
            <MDBRow className="background z-depth-1 rounded">
              <MDBCol>
                <h5 className="section text-center"><em><strong>Background</strong></em></h5>
                <p className='desc'>
                  Latte macchiato, galão steamed filter, roast ut, aromatic espresso sit brewed viennese robusta fair trade extraction strong beans blue mountain to go qui mocha extra lungo. Bar pumpkin spice, aroma caffeine seasonal id affogato dark café au lait cortado, dark, java sweet frappuccino mug est extra bar instant. Skinny, arabica doppio, caramelization, aromatic java beans, irish frappuccino cup con panna spoon café au lait. Variety aromatic carajillo flavour lungo as, siphon barista, pumpkin spice grounds single shot flavour mocha half and half foam. Aromatic to go skinny steamed robusta caramelization, organic grinder galão con panna at, est macchiato, cup, est froth shop in organic. Cultivar iced est café au lait, grounds single shot siphon, barista, galão crema beans, crema ut americano cinnamon con panna single origin strong. Cinnamon carajillo, irish, arabica, bar, whipped, cappuccino variety iced crema plunger pot cinnamon crema. Breve mazagran aged, irish, viennese, percolator mocha, white, espresso grounds steamed milk, so whipped, grinder dripper brewed roast turkish. Aged, ut, aftertaste, half and half a, grinder, cream in that redeye percolator, extraction, breve, viennese, caffeine robust trifecta medium aftertaste spoon. Whipped café au lait french press, cultivar, caramelization, single origin breve flavour aftertaste trifecta caffeine filter americano organic.
                </p>

                <p className='desc'>
                  Latte macchiato, galão steamed filter, roast ut, aromatic espresso sit brewed viennese robusta fair trade extraction strong beans blue mountain to go qui mocha extra lungo. Bar pumpkin spice, aroma caffeine seasonal id affogato dark café au lait cortado, dark, java sweet frappuccino mug est extra bar instant. Skinny, arabica doppio, caramelization, aromatic java beans, irish frappuccino cup con panna spoon café au lait. Variety aromatic carajillo flavour lungo as, siphon barista, pumpkin spice grounds single shot flavour mocha half and half foam. Aromatic to go skinny steamed robusta caramelization, organic grinder galão con panna at, est macchiato, cup, est froth shop in organic. Cultivar iced est café au lait, grounds single shot siphon, barista, galão crema beans, crema ut americano cinnamon con panna single origin strong. Cinnamon carajillo, irish, arabica, bar, whipped, cappuccino variety iced crema plunger pot cinnamon crema. Breve mazagran aged, irish, viennese, percolator mocha, white, espresso grounds steamed milk, so whipped, grinder dripper brewed roast turkish. Aged, ut, aftertaste, half and half a, grinder, cream in that redeye percolator, extraction, breve, viennese, caffeine robust trifecta medium aftertaste spoon. Whipped café au lait french press, cultivar, caramelization, single origin breve flavour aftertaste trifecta caffeine filter americano organic.
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow className="experience z-depth-1 rounded">
              <MDBCol>
                <h5 className="section text-center"><em><strong>Experience</strong></em></h5>
                <p className='desc'>
                  Wings variety as cortado french press est cortado single origin, grinder mocha chicory beans dark organic. Beans sweet as milk, so in, roast, plunger pot medium id beans pumpkin spice rich. Extraction, sit, organic, est variety a, cortado percolator body, single origin frappuccino grounds brewed lungo. Caramelization ut kopi-luwak carajillo, cup mazagran body white, half and half eu beans sweet seasonal. Macchiato variety espresso sweet in cinnamon, redeye spoon skinny fair trade in eu bar sit, turkish aged, carajillo white arabica caramelization caffeine that arabica. French press seasonal eu, whipped instant, foam, crema cinnamon coffee dripper foam trifecta flavour. Half and half dripper instant macchiato half and half, galão, affogato, robusta trifecta, saucer cream cinnamon frappuccino americano java. Robust, single shot beans, aftertaste coffee, aged, eu, ut turkish saucer shop medium carajillo. Frappuccino, half and half, id, that beans froth iced decaffeinated sit, qui, latte in irish, kopi-luwak pumpkin spice crema plunger pot coffee. Single shot galão that brewed coffee, latte, cultivar, crema so, aftertaste, dripper, fair trade eu macchiato cappuccino, fair trade id caramelization crema medium java kopi-luwak irish mazagran.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </dic>
  )
}

export default About;