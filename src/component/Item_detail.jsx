import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.closeDetail = this.closeDetail.bind(this)
  }

  closeDetail(){
    this.props.closeDetail(false)
  }

  render(){
    return(
      <span className="item-details" >
          <div className="detail-close-wrapper">
              <button onClick={ this.closeDetail }>
                    <img src={ require("../assets/icons/Close-slider.png") } alt="goto last item" />
              </button>
          </div>

          <div className="detail-body">
              {/* Put Content of Item Here */}
          </div>
      </span>
    );
  }
}

export default ItemDetail;
