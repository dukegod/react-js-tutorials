import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    user: store.user.user,
  };
})
export default class Profile extends React.Component {    
  render() {
    const { user} = this.props;
    return <h2>姓名：{user.name}  ---- 年龄：{user.age}</h2>
  }
}
