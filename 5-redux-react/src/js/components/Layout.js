import React from "react"
import { connect } from "react-redux"

import { fetchUser, setUserAge, setUserName } from "../actions/userActions"
import { fetchTweets, addTweet, updateTweet, deleteTweet} from "../actions/tweetsActions"

import ViewContent from './view';
import Profile from './profile';

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {     
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }


  setUserName() {
    this.props.dispatch(setUserName('刘辉'))
  }
  setUserAge() {
    this.props.dispatch(setUserAge(18))
  }
  // 获取数据
  fetchTweetsFunc() {
    this.props.dispatch(fetchTweets())
  }
  // 添加数据 
  addTweetFunc() {
    this.props.dispatch(addTweet('lastone', '999999'))
  }
  // 更新数据
  updateTweetFunc() {
    this.props.dispatch(updateTweet('lastone', '888888'))
  }
  // 删除数据
  deleteTweetFunc() {
    this.props.dispatch(deleteTweet('lastone'))
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchTweetsFunc.bind(this)}>获取数据</button>
        <button onClick={this.addTweetFunc.bind(this)}>添加一条数据</button>
        <button onClick={this.updateTweetFunc.bind(this)}>更新一条数据</button>
        <button onClick={this.deleteTweetFunc.bind(this)}>更新一条数据</button>
        <button onClick={this.setUserName.bind(this)}>设置名字</button>
        <button onClick={this.setUserAge.bind(this)}>设置年龄</button>
        
        <Profile />
        <ViewContent />
      </div>
    )
  }
}
