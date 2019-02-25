import React, { Component } from 'react';

class ShadowBox extends Component {
  render() {
    return (
      <div class="Shadow-Box">

        <div id="sbFrame">

          <div id="sbBorder">

            <div id="sbInnerBorder">
              {/* This is where the web page is loaded */}
            </div> {/* End of id sbInnerBorder */}

          </div> {/* End of id sbBorder */}

        </div> {/* End of id sbFrame */}

      </div>
    )
  }
}

export default ShadowBox;