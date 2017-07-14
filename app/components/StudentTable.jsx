import React from 'react';
import AddStudentButton from './AddStudentButton';

const StudentTable = ({ campusId, students }) => {
  return (
    <section className="container">
      <div className="row">
        <h2>Our students</h2>
      </div>
      <AddStudentButton />
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
              type="button"
              className="btn btn-default btn-sm"

              >{ /*onClick="something"*/ }
                <span className="glyphicon glyphicon-remove-circle"></span> ×
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentTable;
