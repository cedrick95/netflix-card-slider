import React from 'react';


class ScrollIndicator extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="progress-container">
        <div className="progress-wrapper">
          <div className="progress-bar" id="progress-percent" style={{ width: `${this.props.scrollIndicator}%` }}></div>
        </div>
      </div>
    );
  }
}

export default ScrollIndicator;
