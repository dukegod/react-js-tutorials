import React from "react";

export default class Number extends React.Component {
  constructor(props) {
    super(props)
    console.log('%cconstructor' + '%c 子组件已构造', 'font-weight:bold', 'color: blue')
  }

  componentWillMount() {
    console.group("%c React 挂载", 'color: #00d8ff')
    console.log('%ccomponentWillMount' + '%c 组件即将挂载', 'font-weight:bold', '')
  }

  componentDidMount() {
    console.log('%ccomponentDidMount' + '%c 组件已挂载', 'font-weight:bold', '')
    console.groupEnd();
    console.log('\n')
  }

  componentWillReceiveProps(newProps) {
    console.group("%c React 更新", 'color: green')
    console.log('%ccomponentWillReceiveProps' + '%c 组件即将接收props', 'font-weight:bold', '')
    console.log('newProps', newProps.counter)
    console.log('this.props', this.props.counter)
  }

  shouldComponentUpdate(newProps, newState) {
    const result = true
    console.info('%cshouldComponentUpdate' + '%c 返回判断是否要更新组件' + `%c ${result}`, 'font-weight:bold', 'color: #ff3c41', 'font-weight:bold;color: #236fd4')
    if (!result) console.groupEnd()
    return result;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%ccomponentWillUpdate' + '%c 组件即将更新', 'font-weight:bold', '')
    console.log('nextProps', nextProps.counter)
    console.log('this.props', this.props.counter)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%ccomponentDidUpdate' + '%c 组件已更新', 'font-weight:bold', '')
    console.log('prevProps', prevProps.counter)
    console.log('this.props', this.props.counter)
    console.groupEnd();
    console.log('\n')
  }

  componentWillUnmount() {
    console.group("%c React 卸载", 'color: brown')
    console.log('%ccomponentWillUnmount' + '%c 组件即将卸载', 'font-weight:bold', 'color: gray')
    console.groupEnd();
    console.log('\n')
  }

  render() {
    console.log('%crender' + '%c 组件渲染中...', 'font-weight:bold', '')
    console.log('this.props', this.props.counter)
    return <p>{ this.props.counter }</p>
  }
}
