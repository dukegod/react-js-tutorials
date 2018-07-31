import React from "react";

import Footer from "./Footer";
import Header from "./Header";

import LifeCycle from './lifecycle';

import ContextTop from './context';

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
        {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> */}
        {/* <Footer/> */}
        {/* <LifeCycle /> */}
        <ContextTop />
        
      </div>
    );
  }
}
