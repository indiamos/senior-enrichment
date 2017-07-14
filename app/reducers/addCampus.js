// ACTION TYPES

const ADD_CAMPUS = 'ADD_CAMPUS';

// ACTION CREATORS

export function addCampus(newCampus) {
  const action = { type: ADD_CAMPUS, newCampus }
  return action;
}

// REDUCER
export default function reducer(state = {}, action) {

  switch (action.type) {

    case ADD_CAMPUS:
      return action.newCampus;

    default:
      return state;
  }
}
