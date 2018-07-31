import React from 'react';

import LastOne from './lastOne';

export default class OneLev extends React.Component{
  render() {
    return <LastOne propsVal={this.props.propsVal}/>
  }
}
