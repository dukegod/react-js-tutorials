import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    tweets: store.tweets.tweets,
  };
})
export default class ViewContent extends React.Component {     
  
  render() {
    const { tweets } = this.props;
    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.title}</li>)
    return <div>
      <ul>{mappedTweets}</ul>
    </div>
  }
};
