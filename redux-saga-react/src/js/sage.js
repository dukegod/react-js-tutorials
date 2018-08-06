
import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

console.log('saga')
// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用

export function fetchPostsApi() {
  return fetch(`https://cnodejs.org/api/v1/topics`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json.data;
    })
}

function* fetchUser() {
   try {
      const user = yield call(
        fetchPostsApi
      );
      console.log(user)
      yield put({type: "FETCH_TWEETS_FULFILLED", payload: user
    });
   } catch (e) {
      yield put({type: "FETCH_TWEETS_REJECTED", e});
   }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("FETCH_TWEETS", fetchUser);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//   yield takeLatest("FETCH_TWEETS", fetchUser);
// }

export default mySaga;