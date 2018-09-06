import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      detailState: false,
      activeItem: false,
      items : ""
    }

    this.showDetail = this.showDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  renderItems(){
    return staticData.map(res => { return (
      <div key={res.id} className={`items`}>
        <div className={`item-status-`+`${res.id}`}>
          {res.id}
           <i onClick={ () => this.showDetail(res.id) }>
            <img src={ require( `${res.image}` ) } alt={res.image}/>
           </i>
        </div>
      </div>
    ) })
  }

  renderDetail(){

  }

  nextBtn(){
    document.querySelector(".item-navigation").scrollBy(500,0)
  }

  previousBtn(){
    document.querySelector(".item-navigation").scrollBy(-500,0)
  }

  showDetail(e){
    let itemActive = document.querySelector(".item-active");
    let items = document.querySelector(".item-navigation");
    let itemInactive = document.querySelector(".item-inactive");
    let itemStatus = document.querySelector(`.item-status-`+`${e}`)

    if (itemActive){
      itemActive.classList.remove("item-active");
    }
    items.classList.add("item-inactive");
    itemStatus.classList.add("item-active");
    this.setState({ detailState: true });
  }

  closeDetail(){
    let itemActive = document.querySelector(".item-active");
    let items = document.querySelector(".item-navigation");

    itemActive.classList.remove("item-active")
    items.classList.remove("item-inactive")
    this.setState({ detailState : false})
  }

  funDetail(){
    return (
      <span className="item-details">
        <div className="detail-close-wrapper">
          <button onClick={ this.closeDetail }>
              close
          </button>
        </div>
        <div className="detail-body">

        </div>
      </span>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="items-container ">
          <div className="item-wrapper">
            <div className="item-navigation">
                {this.renderItems()}
                <div className="last-item"></div>
            </div>

            <button className="btn-nav left" onClick={ this.previousBtn }>
              <img src="http://simpleicon.com/wp-content/uploads/arrow-18.png" height={50} width={50} alt="left" />
            </button>

            <button className="btn-nav right" onClick={ this.nextBtn }>
              <img src="http://simpleicon.com/wp-content/uploads/arrow-18.png" height={50} width={50} alt="right" />
            </button>

          </div>

            { this.state.detailState ? this.funDetail() : ""}

          </div>

        <h1>hello world!</h1>

        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
          {this.renderDetail()}
        </div>

      </div>
    );
  }
}

export default App;

const staticData = [
  {
    id: 1,
    image: "./assets/img/card1.png"
  },
  {
    id: 2,
    image: "./assets/img/card2.png"
  },
  {
    id: 3,
    image: "./assets/img/card3.png"
  },
  {
    id: 4,
    image: "./assets/img/card4.png"
  },
  {
    id: 5,
    image: "./assets/img/card5.png"
  },
  {
    id: 6,
    image: "./assets/img/card6.png"
  },
  {
    id: 7,
    image: "./assets/img/card7.png"
  },
  {
    id: 8,
    image: "./assets/img/card8.png"
  },
  {
    id: 9,
    image: "./assets/img/card9.png"
  },
  {
    id: 10,
    image: "./assets/img/card10.png"
  }
];
