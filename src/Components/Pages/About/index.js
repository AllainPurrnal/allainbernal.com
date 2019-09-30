import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Dev Styles
import './index.css';
import me from './assets/profile1.jpg';

function About() {
  return(
      <MDBContainer className="aboutPage mt-5 text-justify">
        <MDBRow>
          <MDBCol md="3">
            <div className="profileImage">
              <img src='http://placekitten.com/250/250' className="img-fluid z-depth-1 rounded-circle" alt='me' height="250px"></img>

              <ul id="aboutNav">
                <li>
                  <a href="/About#background"><h4><em>Background</em></h4></a>
                </li>

                <li>
                  <a href="/About#experience"><h4><em>Experience</em></h4></a>
                </li>
              </ul>
            </div>
          </MDBCol>

          <MDBCol md="9">
            <MDBRow className="my-background"  id="background">
              <MDBCol className="z-depth-1 rounded">
                <h5 id="sectionHeader" className="text-center"><em><strong>Background</strong></em></h5>
                
                <p id='desc'>
                  A, con panna medium robusta single shot barista whipped, aged qui turkish, ut macchiato plunger pot roast brewed instant siphon and cream. Variety that arabica plunger pot, blue mountain foam con panna, affogato crema, so java, doppio frappuccino robusta body dark rich robusta id froth cortado dark. Breve, at organic so, cup coffee, cappuccino, carajillo barista, variety organic seasonal, redeye rich as cappuccino foam instant. Froth dripper medium, fair trade mug, at wings so, variety instant extra pumpkin spice cultivar. Single shot, cappuccino siphon froth, instant, iced froth, doppio in dark steamed body, that iced, beans americano, qui id foam espresso filter white. Robust, extraction froth, spoon macchiato a decaffeinated trifecta ristretto cream flavour redeye ristretto macchiato. Shop grinder, cream, cinnamon cup ut, cinnamon, black grounds shop ut at, eu, to go grounds acerbic galão single shot arabica, redeye aromatic strong robusta breve.
                </p>
                
                <p id='desc'>
                  Variety, siphon black, caffeine siphon so et strong cup, shop, trifecta ristretto extraction, shop qui, breve cup filter single origin grounds. Plunger pot in espresso carajillo mazagran, aged, id, to go, extra, con panna doppio, cinnamon et bar organic, ut decaffeinated mazagran, cinnamon grinder iced chicory grounds. Seasonal est, skinny, siphon that, iced half and half, robust siphon cup that, sweet, french press barista, redeye, brewed macchiato wings black fair trade espresso blue mountain plunger pot. Trifecta organic, ristretto, breve organic sugar, ut, beans frappuccino sit, frappuccino id ristretto that in strong est robusta. White spoon beans grounds single origin carajillo, black, iced aroma viennese, crema so a trifecta brewed. Qui, lungo cream pumpkin spice, grinder filter viennese fair trade viennese, roast ut french press that frappuccino crema. Viennese, beans trifecta variety shop café au lait trifecta fair trade, aftertaste, macchiato wings, spoon, aged to go single origin cortado caramelization sweet.
                </p>
                
                <p id='desc'>
                  Single origin aftertaste half and half mazagran blue mountain est, americano, half and half, doppio white cup medium sweet, carajillo sweet frappuccino latte roast eu dripper latte. Ut shop, mazagran iced variety, coffee at beans rich robust single origin, crema half and half, shop con panna cream dark body. Roast aged half and half acerbic decaffeinated coffee medium, dripper frappuccino organic latte mocha saucer irish decaffeinated organic cinnamon. Spoon mug, trifecta body, steamed mocha café au lait latte, irish extra, turkish flavour saucer plunger pot sweet viennese. Variety, cup, as mocha, robusta siphon ristretto barista and, eu whipped roast single shot to go, cappuccino caramelization medium caffeine bar to go. Cup aromatic ut, single origin roast and id qui, french press medium, and blue mountain saucer, lungo robusta affogato in espresso pumpkin spice froth saucer. Grinder, café au lait dark et espresso, doppio blue mountain frappuccino, mug extra robust doppio single shot café au lait that pumpkin spice americano wings robust sugar iced chicory siphon. Doppio cup kopi-luwak, macchiato cup cream arabica robusta viennese caramelization black half and half plunger pot siphon caffeine saucer. Strong extraction, iced, filter so cultivar aromatic qui plunger pot percolator bar con panna saucer at ristretto.
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow className="my-experience" id="experience" >
              <MDBCol className="z-depth-1 rounded">
                <h5 id="sectionHeader" className="text-center"><em><strong>Experience</strong></em></h5>
                
                <p id='desc'>
                  Aftertaste, milk, pumpkin spice caffeine french press coffee, skinny, so trifecta, flavour aged so brewed extra. A est, aromatic white organic black half and half cinnamon, mocha medium froth acerbic variety cinnamon cream. Strong robusta, con panna, filter single shot percolator decaffeinated qui brewed, medium, americano roast dripper organic half and half barista redeye. Decaffeinated froth, coffee single origin, saucer latte seasonal, coffee single shot java, sit kopi-luwak cream grounds french press crema pumpkin spice, aftertaste to go aromatic a steamed decaffeinated acerbic. Caffeine, half and half, coffee so iced, body id filter brewed cup white espresso, single shot qui cup cappuccino irish. Frappuccino cinnamon cup lungo decaffeinated, aroma, shop skinny, to go et, cup sit that instant half and half, milk viennese, organic crema at milk instant iced whipped. Sweet java viennese, eu shop, lungo cultivar, espresso, foam frappuccino aromatic single shot, whipped, percolator carajillo americano ristretto coffee.
                </p>
                
                <p id='desc'>
                  Americano foam white barista, est carajillo decaffeinated qui cultivar café au lait arabica decaffeinated, mug, cup aged white french press, et to go eu variety seasonal. Et blue mountain siphon frappuccino, aromatic sugar, in qui aged ristretto trifecta variety robust caffeine macchiato. Rich siphon, acerbic iced, medium con panna, affogato con panna arabica, crema con panna froth con panna saucer. Shop in fair trade, ut, mocha, ut, cream grounds irish crema body mug, cup, wings, decaffeinated flavour aged, cappuccino white plunger pot cappuccino galão cultivar. Decaffeinated cup saucer as, plunger pot, extraction, carajillo latte, id sweet and froth wings. Half and half, doppio dripper steamed single origin black foam mug frappuccino coffee, roast latte wings lungo dripper robust mocha. Coffee doppio, seasonal, eu et, aged white instant, arabica, coffee extra, chicory milk, coffee americano, single origin bar plunger pot cappuccino robust.
                </p>

                <p id='desc'>
                  Acerbic macchiato est, extraction bar est coffee, cinnamon plunger pot robusta, white mazagran affogato wings shop. Caramelization robusta, milk, seasonal fair trade chicory, to go mocha, latte, crema, fair trade spoon irish cup, café au lait dripper french press mazagran grounds. Pumpkin spice extra affogato cream flavour cup, crema cup aftertaste percolator, arabica cappuccino doppio filter and kopi-luwak aftertaste, crema extraction single shot percolator medium siphon. Medium single shot arabica breve crema, mocha, black caffeine, that coffee est percolator redeye cup con panna. Affogato latte a cinnamon in iced, dripper cortado, chicory roast mug cup sweet est mocha single origin variety french press. Viennese et rich, turkish irish, java coffee seasonal strong filter irish saucer, beans, foam french press siphon java kopi-luwak. Americano, robust java, crema, crema sugar blue mountain so, ristretto, beans eu, sweet, iced ristretto filter lungo wings carajillo white. Cappuccino aftertaste crema black coffee sugar white latte, aromatic, extra bar wings, mug cinnamon, con panna medium mug java french press blue mountain. Percolator foam doppio milk turkish instant so half and half shop, id black robusta fair trade arabica robusta plunger pot frappuccino sugar aroma seasonal viennese.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  )
}

export default About;