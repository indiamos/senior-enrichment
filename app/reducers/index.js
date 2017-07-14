import {
  combineReducers,
  applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk';

import addCampus from './addCampus';
import addStudent from './addStudent';
import campuses from './campuses';
import singleCampus from './singleCampus';
import students from './students';

const initialState = {}

const rootReducer = combineReducers({
  addCampus,
  addStudent,
  campuses,
  singleCampus,
  students
});

export default rootReducer;
