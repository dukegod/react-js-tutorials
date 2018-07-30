import axios from 'axios';

export function fetchTweets() {
  return function(dispatch) {
    dispatch({ type: 'FETCH_TWEETS' });
    axios
      .get('https://cnodejs.org/api/v1/topics')
      .then(response => {
        console.log(response);
        dispatch({
          type: 'FETCH_TWEETS_FULFILLED',
          payload: response.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_TWEETS_REJECTED',
          payload: err
        });
      });
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
