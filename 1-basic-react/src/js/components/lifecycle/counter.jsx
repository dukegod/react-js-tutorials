import React from "react";

import ReactDOM from "react-dom";

import Number from './number';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.log('%cconstructor' + '%c 父组件已构造', 'font-weight:bold', 'color: #ae63e4')

  }

  componentWillMount() {
    this.state = {
      counter: 0
    }
    console.log('this.state componentWillMount', this.state.counter)
  }

  shouldComponentUpdate(newProps, newState) {
    const result = true
    console.info('%cshouldComponentUpdate' + '%c 返回判断是否要更新父组件' + `%c ${result}`, 'font-weight:bold', 'color: #ff3c41', 'font-weight:bold;color: #236fd4')
    return result;
  }

  addOne() {
    console.log('%caddOne()' + '%c 事件处理函数触发', 'font-weight:bold', '')
    console.log('prevState', this.state.counter)
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  }

  update() {
    this.forceUpdate()
  }

  render() {
    console.log('%crender' + '%c 父组件渲染中...', 'font-weight:bold', '')
    console.log('nextState', this.state.counter)
    console.log('\n')
    return (
      <div>
        <Number counter={this.state.counter} />
        <button
          onClick={() => this.addOne()}>
          增加
        </button>
        <button
          onClick={() => this.update()}>
          强制更新
        </button>
        <button
          onClick={() => this.unMount()}>
          卸载
        </button>
      </div>
    )
  }
}
