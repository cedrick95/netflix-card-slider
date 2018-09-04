import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      detailState: "active",
    }
  }

  nextBtn(){
    console.log("next");
  }

  render() {
    return (
      <div className="App">
        <div className={ "items-container "  }>
          <div className="item-wrapper">
            <div className="item-navigation">
                <div className="items" style={{ background: "blue" }}>

                </div>
                <div className="items" style={{ background: "red" }}>

                </div>
                <div className="items " style={{ background: "orange" }}>

                </div>
                <div className="items one" style={{ background: "black" }}>

                </div>
                <div className="items" style={{ background: "brown" }}>

                </div>
                <div className="items" style={{ background: "yellow" }}>

                </div>
                <div className="items two" style={{ background: "green" }}>

                </div>
                <div className="items" style={{ background: "purple" }}>

                </div>
                <div className="items" style={{ background: "pink" }}>

                </div>
                <div className="items" style={{ background: "magenta" }}>

                </div>
            </div>

            <button className="btn-left btn" >
              <i> </i>
            </button>

            <button className="btn-right btn" onClick={ this.nextBtn }>
              <i>  </i>
            </button>

          </div>

          <div className="item-details">

          </div>

          </div>



        <h1>hello world!</h1>

        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
    );
  }
}

export default App;
