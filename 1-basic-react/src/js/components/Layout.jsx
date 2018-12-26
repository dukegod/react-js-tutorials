import React from "react";

// import Footer from "./Footer";
import Header from "./Header";

import ContextTop from './context';

// import Myrefs from './refs'

import ParentRefs from './refs'

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
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        {/* <Footer/> */}
        <ContextTop />
        <ParentRefs />
        
      </div>
    );
  }
}
