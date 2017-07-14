import axios from 'axios';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATORS
export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

// THUNK CREATORS
export function fetchCampus (campusId) {

  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        console.log('/app/reducers/singleCampus.js, line 19: campus: ', campus);
        const action = getCampus(campus);
        dispatch(action);
      });
  };
}

// REDUCER
export default function reducer (state = {}, action) {

  switch (action.type) {

    case GET_CAMPUS:
      return { selectedCampus: action.campus };

    default:
      return state;
  }

}
