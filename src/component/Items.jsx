import React from 'react';

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
    if(this.props.dataProps.data){
      return this.props.dataProps.data.map( res =>  {
        let desc = res.field_description[0].value.replace("<p>","").replace("</p>","")
        return (
            <div key={res.nid[0].value} className={`items`}>
                <div className={ this.activeItem(res.nid[0].value) } >
                     <i onClick={ (e) => this.clickHandle({ id: res.nid[0].value, ref : e.target }) } >
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
