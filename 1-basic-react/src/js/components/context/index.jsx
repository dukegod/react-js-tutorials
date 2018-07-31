import React from 'react';
import PropTypes from 'prop-types'; // ES6

import OneLev from './oneLev';

export default class ContextTop extends React.Component{

  defaultProps = {
    propsVal: '通过props传递的数据方式'
  }

  getChildContext() {
    return {
      contextVal: '通过context获取上下文数据的方式'
    }
  }

  render() {
    console.log(this)
    return <OneLev propsVal={this.defaultProps.propsVal} />
  }

}

ContextTop.childContextTypes = {
  contextVal: React.PropTypes.string
}
