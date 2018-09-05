import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      detailState: "active",
    }
  }

  nextBtn(){
    document.querySelector(".item-navigation").scrollBy(500,0)
  }



  previousBtn(){
    document.querySelector(".item-navigation").scrollBy(-500,0)
  }

  render() {
    return (
      <div className="App">
        <div className="items-container ">
          <div className="item-wrapper">
            <div className="item-navigation">
                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>

                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>

                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>

                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>

                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>

                <div className="items">
                  <img src={require('./assets/img/card1.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card2.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card3.png')} />
                </div>
                <div className="items">
                  <img src={require('./assets/img/card4.png')} />
                </div>
            </div>

            <button className="btn-nav left" onClick={ this.previousBtn }>
              <img src="http://simpleicon.com/wp-content/uploads/arrow-18.png" height={50} width={50} />
            </button>

            <button className="btn-nav right" onClick={ this.nextBtn }>
              <img src="http://simpleicon.com/wp-content/uploads/arrow-18.png" height={50} width={50} />
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
