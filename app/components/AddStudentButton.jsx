import React from 'react';
import { NavLink } from 'react-router-dom';

const AddStudentButton = () => {
  return (
    <div className="row justify-content-end">
      <NavLink to="/students/new-student">
        <button type="button" className="btn btn-default" aria-label="Plus sign">
          <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Add student</span>
        </button>
      </NavLink>
    </div>
  );
};

export default AddStudentButton;
