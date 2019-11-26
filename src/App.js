import React, { Component } from 'react';
import Items from './component/Items'
import ItemDetail from './component/Item_detail'
import ScrollIndicator from './component/Scroll_indicator'

class App extends Component {
  constructor(){
    super();
    this.state = {
      scrollIndicator: 0,
      data: [],
      navData: "",
      detailVisible: false,
      closeItem: false
    }

    this.closeDetail = this.closeDetail.bind(this);
    this.onScrollIndicator = this.onScrollIndicator.bind(this);
    this.nextBtn = this.nextBtn.bind(this);
    this.previousBtn = this.previousBtn.bind(this);
    this.getRefNav = this.getRefNav.bind(this);
    this.gotoLastItem = this.gotoLastItem.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  componentDidMount(){
    // axios.get(`http://localhost:9005/api/credit-card?_format=json`).then( res => {
    //   this.setState({ data: res });
    // });
    this.setState({
      data: staticData
    })
  }

  nextBtn(){
    this.state.navData.scrollBy(500,0);
  }

  previousBtn(){
    this.state.navData.scrollBy(-500,0);
  }

  closeDetail(event){
    this.setState({ detailVisible: event })
  }

  gotoLastItem(){
    this.state.navData.scrollLeft  = this.state.navData.scrollWidth;
  }

  onScrollIndicator(e){
    let scrollPosition = this.state.navData.scrollLeft;
    let scrollLength = this.state.navData.scrollWidth - this.state.navData.clientWidth;
    let scrolled = (scrollPosition / scrollLength) * 100;
    this.setState({ scrollIndicator: scrolled });

    if(scrolled > 98){
      this.setState({ rightBtnVisible: true });
    }

    if(scrolled < 2){
      this.setState({ leftBtnVisible: true });
    }

    if(scrolled < 98 & scrolled > 2 ){
      this.setState({ rightBtnVisible: false });
      this.setState({ leftBtnVisible: false });
    }
  }

  getRefNav(e){
    this.setState({ navData: e })
  }

  showDetail(event){
    this.setState({  detailVisible : event.activeItem })
  }

  render() {
    return (
      <div className="feature-slider">
          <div className="topic-header">
              {/* put title here */}
              <h3>Savings</h3>
          </div>

          {/* Scroll Indicator Component */}
          <ScrollIndicator scrollIndicator={this.state.scrollIndicator}/>

          <div className="items-container">
              <div className="item-wrapper">
                  <div className={"item-navigation"} ref={this.getRefNav} onScroll={ this.onScrollIndicator }>
                      <div className="first-item">
                          { /* put description */ }
                          <p>
                              Choose your travel rewards from airline tickets, hotel/resort accommodation,
                              travel packages to transfer of rewards points to Philippine Airlines' Mabuhay
                              Miles and more!
                          </p>

                          <i onClick={this.gotoLastItem}>
                            <img src={ require("./assets/icons/Arrow.png") } alt="goto last item" />
                          </i>
                      </div>

                      {/* Items Components */}
                      <Items dataProps={this.state.data} detailVisible={this.state.detailVisible} activeItem={this.showDetail}/>

                      <div className="last-item"></div>
                  </div>

                  <button className={"btn-nav left" + (this.state.leftBtnVisible ? " hide" : "")} onClick={ (this.previousBtn) }>
                      <img src={ require("./assets/icons/left.png") } alt="left" />
                  </button>

                  <button className={"btn-nav right" + (this.state.rightBtnVisible ? " hide" : "")} onClick={ (this.nextBtn) }>
                      <img src={ require("./assets/icons/right.png") }  alt="right" />
                  </button>
              </div>

            {/* Items Components */}
            {this.state.detailVisible ? <ItemDetail closeDetail={this.closeDetail} /> : ""}
        </div>
      </div>
    );
  }
}

export default App;

const staticData = [
  {
    id: 1,
    image: "../assets/img/card8.png"
  },
  {
    id: 2,
    image: "../assets/img/card9.png"
  },
  {
    id: 3,
    image: "../assets/img/card7.png"
  },
  {
    id: 4,
    image: "../assets/img/card9.png"
  },
  {
    id: 5,
    image: "../assets/img/card8.png"
  },
  {
    id: 6,
    image: "../assets/img/card6.png"
  },
  {
    id: 7,
    image: "../assets/img/card7.png"
  },
  {
    id: 8,
    image: "../assets/img/card8.png"
  },
  {
    id: 9,
    image: "../assets/img/card9.png"
  },
  {
    id: 10,
    image: "../assets/img/card10.png"
  }
];
