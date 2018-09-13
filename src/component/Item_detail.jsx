import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }

    this.closeDetail = this.closeDetail.bind(this)
  }

  closeDetail(){
    this.props.closeDetail(false)
  }

  render(){
    return(
      <span className="item-details" >
        <span id="pointer"></span>
        <div className="detail-close-wrapper">
          <button onClick={ this.closeDetail }>
              <img src={ require("../assets/icons/Close-slider.png") } alt="goto last item" />
          </button>
        </div>

        <div className="detail-body">
        </div>
      </span>
    );
  }

}

export default ItemDetail;
