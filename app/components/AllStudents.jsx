import { connect } from 'react-redux'
import StudentTable from './StudentTable'
import { fetchStudents } from '../store';

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
