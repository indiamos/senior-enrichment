// This component isn't imported anywhere yet.

import { connect } from 'react-redux'
import StudentTable from './StudentTable'
import { fetchStudents } from '../store';

// If we have a specific campus ID and an array of all the students, we can filter them as follows:
const getCampusStudents = (campusId, students) => {
 students.filter(student => {
   return campusId === Number(student.campusId);
 });
};

const mapStateToProps = students => {
  return students;
};

const mapDispatchToProps = dispatch => {
  return fetchStudents();
}

const AllStudents = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTable)

export default AllStudents
