import React from "react";

import LifeCycle from './lifecycle';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "todo List items",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <LifeCycle />        
      </div>
    );
  }
}
