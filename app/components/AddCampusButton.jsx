import React from 'react';
import { NavLink } from 'react-router-dom';

const AddCampusButton = () => {
  return (
    <div className="row justify-content-end">
      <NavLink to="/campuses/new-campus">
        <button type="button" className="btn btn-default" aria-label="Plus sign">
          <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Add campus</span>
        </button>
      </NavLink>
    </div>
  );
};

export default AddCampusButton;
