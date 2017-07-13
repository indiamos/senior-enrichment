import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from './reducers/index.js';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())));

export * from './reducers/students';
export * from './reducers/campuses';
export * from './reducers/addCampus';
export * from './reducers/addStudent';
