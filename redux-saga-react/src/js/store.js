import 'regenerator-runtime/runtime';

import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import createSagaMiddleware from 'redux-saga'

import reducer from "./reducers"
import saga from "./sage";


const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  promise(), 
  thunk, 
  logger(), 
  sagaMiddleware
)



const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)
sagaMiddleware.run(saga);

export default store;