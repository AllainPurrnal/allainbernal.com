import React, { Component } from 'react';
import styles from './index.module.css';

//Dev Page Imports
import Welcome from '../Welcome Page';

class ShadowBox extends Component {
  render() {
    var sbFrameStyle = {
      size: "100%",
      borderColor: "black",
      borderSize: 25,
    }

    var sbBorderStyle = {
      // size: "90%",
      backgroundSize: "90%",
      backgroundColor: "white"

    }


    return (
      <div className="Shadow-Box">

        <div style={sbFrameStyle} className={styles.sbFrame}>
          {/* Potato */}
          <div style={sbBorderStyle}>

            <div id="sbInnerBorder">
              {/* This is where the web page is loaded */}
              <Welcome />
            </div> {/* End of id sbInnerBorder */}

          </div> {/* End of id sbBorder */}

        </div> {/* End of id sbFrame */}

      </div>
    )
  }
}

export default ShadowBox;