import React from 'react';
import image1 from "../assets/img/card8.png"
import image2 from "../assets/img/card9.png"
import image3 from "../assets/img/card7.png"
import image4 from "../assets/img/card9.png"
import image5 from "../assets/img/card8.png"
import image6 from "../assets/img/card6.png"
import image7 from "../assets/img/card7.png"
import image8 from "../assets/img/card8.png"
import image9 from "../assets/img/card9.png"
import image10 from "../assets/img/card10.png"

const imahe = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
]

class Items extends React.Component {
  constructor(props){
    super();
    this.state = {
      activeItem: false,
      itemRef: "",
    }
    this.renderItems = this.renderItems.bind(this);
    this.activeItem = this.activeItem.bind(this);
  }

  clickHandle({ id,ref }){
    ref.scrollIntoView({inline: "center"})
    if(this.state.activeItem === id){
        this.setState({ activeItem: false });
        this.props.activeItem({ activeItem: false , itemId: id });
    }
    else{
        this.props.activeItem({ activeItem: true , itemId: id })
        this.setState({ activeItem: id });
    }
    this.activeItem;
  }

  activeItem(id){
      if (this.props.detailVisible && this.state.activeItem === id) {
          return "item-status item-active";
      } else if (this.props.detailVisible && this.state.activeItem !== id) {
          return "item-status item-inactive";
      } else {
          return "item-status";
      }
  }

  renderItems(){

    if(this.props.dataProps){
      return this.props.dataProps.map( (res, index) =>  {
        // let desc = res.field_description[0].value.replace("<p>","").replace("</p>","")
        return (
            <div key={res.id} className={`items`}>
                <div className={ this.activeItem(res.id) } >
                     <i onClick={ (e) => this.clickHandle({ id: res.id, ref : e.target }) } >
                          <div style={{ position: "relative" }}>
                              <img src={imahe[index]} alt={"?"}/>
                              <img
                                className="feature-arrow"
                                src={ require("../assets/icons/show-feature.png")  }
                                alt={"?"}
                              />
                          </div>
                          <p>[title]</p>
                          <p>[description]</p>
                     </i>
                     <div id="pointer2"></div>
                </div>
            </div>
        )})
    }
  }

  render(){
    return (this.renderItems() ? this.renderItems(): "") ;
  }
}


export default Items;
