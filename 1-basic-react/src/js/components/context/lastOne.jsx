import React from 'react';
import PropTypes from 'prop-types'; 

export default class LastOne extends React.Component{

  render() {
    return (
      <div> 
        <p> <span>来自props：</span> {this.props.propsVal} </p>
        <p> <span>来自context：</span> {this.context.contextVal} </p>
      </div>
    )
  }

}

LastOne.contextTypes = {
  contextVal: React.PropTypes.string
}
