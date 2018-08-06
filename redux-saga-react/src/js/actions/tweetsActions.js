import axios from 'axios';

export function fetchTweets() {
  return {
    type: 'FETCH_TWEETS',
    payload : {

    }
  };
}

export function addTweet(id, title) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      title
    }
  };
}

export function updateTweet(id, title) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      title
    }
  };
}

export function deleteTweet(id) {
  return {
    type: 'DELETE_TWEET',
    payload: id
  };
}
