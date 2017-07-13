import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import AddStudent from './AddStudent';
// import { changeCurrentCampus } from '../store';

export default function StudentList (props) {
  console.log(props);
  const studentList = props.studentList;
  const { campusId, students } = props;

  return (
    <section>
      <ul className="media-list">
        { students.map(student => <Student student={student} key={student.id} />) }
      </ul>
      <AddStudent campusId={campusId} />
    </section>
  );
}

// class StudentListLoader extends Component {

//   componentDidMount () {
//     this.props.changeCurrentCampus(this.props.campus.name);
//   }

//   componentWillReceiveProps (nextProps) {
//     if (nextProps.campus.name !== this.props.campus.name) {
//       this.props.changeCurrentCampus(nextProps.campus.name);
//     }
//   }

//   render () {
//     return (
//       <StudentList {...this.props} />
//     );
//   }
// }

// const mapStateToProps = function (state, ownProps) {

//   const campusId = Number(ownProps.match.params.campusId);

//   return {
//     campus: state.campuses.find(campus => campus.id === campusId) || { name: '' },
//     students: state.students.filter(student => student.campusId === campusId),
//     campusId
//   };
// };

// const mapDispatchToProps = function (dispatch) {
//   return {
//     changeCurrentCampus(campusName) {
//       dispatch(changeCurrentCampus(campusName));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StudentListLoader);
