import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent } from '../reducers/students';

/* -----------------    COMPONENT     ------------------ */

class StudentRow extends React.Component {
  render() {
    const { student, removeStudent } = this.props;

    return (
      <table className="table table-striped table-responsive table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Campus</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        { students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName} {student.lastName}</td>
            <td>{student.campusId}</td>
            <td>
              <button
                className="btn btn-default btn-xs"
                onClick={ () => removeStudent(student.id) }>
                <span className="glyphicon glyphicon-remove-circle" />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  };
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatchToProps = { removeStudent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentRow);
