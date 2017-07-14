import axios from 'axios';

// ACTION TYPES

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const REMOVE_STUDENT  = 'REMOVE_STUDENT';

// ACTION CREATORS

export function getStudent(student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function removeStudent(studentId) {
  const action = { type: REMOVE_STUDENT, studentId };
  return action;
}

// THUNK CREATORS

export function fetchStudents() {

  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postStudent(student) {

  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
      });
  };
}

export function destroyStudent(studentId) {

  return function thunk(dispatch) {
    dispatch(removeStudent(studentId));
    axios.delete(`/api/students/${studentId}`)
    .catch(err => console.error(`Removing student: ${studentId} unsuccessful`, err));
  };
}

// REDUCER

export default function reducer(students = [], action) {

  switch (action.type) {

    case GET_STUDENT:
      return [...students, action.student];

    case GET_STUDENTS:
      return action.students;

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.studentId);

    default:
      return students;
  }
}
