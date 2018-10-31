import React from 'react';
import { connect } from 'react-redux';
import { setUserName } from "../actions/userActions"

@connect(store => {
  return {
    // user: store.user.user,
    tweets: store.tweets.tweets
  };
})
export default class ViewContent extends React.Component {
  setUserName() {
    this.props.dispatch(setUserName('liuhui_is_me'))
  }
  render() {
    console.log(this)
    const { tweets } = this.props;
    const mappedTweets = tweets.map(tweet => (
      <li key={tweet.id}>{tweet.title}</li>
    ));
    return (
      <div>
        <ul>{mappedTweets}</ul>
        <button onClick={this.setUserName.bind(this)}>子组件控制父组件的名字显示</button>
      </div>
    );
  }
}
