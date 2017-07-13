// ACTION TYPES

const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';

// ACTION CREATORS

export function writeCampusName(name) {
  const action = { type: WRITE_CAMPUS_NAME, name };
  return action;
}

export function writeCampusImage(image) {
  const action = { type: WRITE_CAMPUS_IMAGE, image };
  return action;
}

// REDUCER
export default function reducer(state = '', action) {

  switch (action.type) {

    case WRITE_CAMPUS_NAME:
      return action.writeCampusName;

    case WRITE_CAMPUS_IMAGE:
      return action.writeCampusImage;

    default:
      return state;
  }
}
