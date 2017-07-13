// ACTION TYPES

const WRITE_STUDENT_FIRSTNAME = 'WRITE_STUDENT_FIRSTNAME';
const WRITE_STUDENT_LASTNAME = 'WRITE_STUDENT_LASTNAME';

// ACTION CREATORS

export function writeStudentFirstName (newFirstName) {
  const action = { type: WRITE_STUDENT_FIRSTNAME, newFirstName };
  return action;
}

export function writeStudentLastName (newLastName) {
  const action = { type: WRITE_STUDENT_LASTNAME, newLastName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_STUDENT_FIRSTNAME:
      return action.newFirstName;

    case WRITE_STUDENT_LASTNAME:
      return action.newLastName;

    default:
      return state;
  }

}
