import {
  combineReducers,
  applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk';

import addCampus from './addCampus';
import addStudent from './addStudent';
import campuses from './campuses';
import students from './students';

const initialState = {}

const rootReducer = combineReducers({
  students,
  campuses,
  addCampus,
  addStudent
});

export default rootReducer;
