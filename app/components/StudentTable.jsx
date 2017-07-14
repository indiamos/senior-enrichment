import React from 'react';

const StudentTable = ({ campusId, students }) => {
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
            <button type="button" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-remove-circle">×</span>
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
