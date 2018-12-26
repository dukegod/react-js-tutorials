import React from "react";

export default class Myrefs extends React.Component {
  constructor(props) {
    super(props);
  }

  focus() {
    console.log(this.textInput);
    this.textInput.focus();
  }

  getInputValue(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <p> </p>
        <input
          onChange={e => {
            this.getInputValue(e);
          }}
          ref={input => {
            console.log(input);
            this.textInput = input;
          }}
        />
        <button type="button" onClick={this.focus.bind(this)}>
          点击我获取焦点
        </button>
      </div>
    );
  }
}
