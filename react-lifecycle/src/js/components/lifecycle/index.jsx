import * as React from 'react';

import Counter from './counter';

import './index.css';

export default class LifeCycle extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="life">
        <Counter />
      </div>
    )
  }
}