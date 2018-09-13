import React from 'react';
import ItemDetail from './Item_detail'

class Items extends React.Component {
  constructor(props){
    super();
    this.state = {
      activeItem: false,

    }
    this.renderItems = this.renderItems.bind(this);
    this.activeItem = this.activeItem.bind(this);
    this.getItemRef = this.getItemRef.bind(this);
  }

  componentDidUpdate(){
    const item = {
      active : document.querySelector(".item-active"),
    }
    if(item.active){
      item.active.scrollIntoView({inline: "center"});
    }
  }


  clickHandle(e){
    if(this.state.activeItem == e){
      this.setState({ activeItem: false });
      this.props.activeItem({ activeItem: false , itemId: e });
    }
    else{
      this.props.activeItem({ activeItem: true , itemId: e })
      this.setState({ activeItem: e });
    }
    this.activeItem;
  }

  activeItem(e){
      if (this.props.detailVisible && this.state.activeItem == e) {
        return "item-status item-active";
      } else if (this.props.detailVisible && this.state.activeItem !== e) {
        return "item-status item-inactive";
      } else {
        return "item-status";
      }
  }

  getItemRef(itemRef){
    this.setState({ itemRef })
  }

  renderItems(){

    if(this.props.dataProps.data){
      console.log(this.props.dataProps.data);
      return this.props.dataProps.data.map( res =>  {
        let desc = res.field_description[0].value.replace("<p>","").replace("</p>","")
        return (
          <div key={res.nid[0].value} className={`items`}>
            <div className={ this.activeItem(res.nid[0].value) } ref={this.getItemRef}>
               <i onClick={ () => this.clickHandle(res.nid[0].value) }>
                <div style={{ position: "relative" }}>
                  <img src={ `${res.field_credit_card_image[0].url}` } alt={res.field_credit_card_image[0].url}/>
                  <img className="feature-arrow" src={ require("../assets/icons/show-feature.png")  } alt={res.image}/>
                </div>
                <p>{res.title[0].value}</p>
                <p>{desc}</p>
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
