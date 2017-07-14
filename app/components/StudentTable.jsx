import React from 'react';
import StudentRow from './StudentRow';

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
        { this.props.students.map(student => <StudentRow student={student} key={student.id} />) }
      </tbody>
    </table>
  );
};

/* -----------------    CONTAINER     ------------------ */

const mapStatetoProps = { students };

const mapDispatchtoProps = null;

export default connect(mapStatetoProps, mapDispatchtoProps)(StudentTable);
