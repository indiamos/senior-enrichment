import React from 'react';
import { connect } from 'react-redux';
import { postStudent, writeStudentFirstName, writeStudentLastName, writeStudentEmail } from '../store';

function AddStudent({ newStudentFirstName, newStudentLastName, newStudentEmail, newStudentCampus, handleChange, handleSubmit }) {

  return (
    <div className="container">
      <form id="new-student-form" onSubmit={event => handleSubmit(firstName, lastName, email, campusId, event)}>
        <div className="form-group row">
          <h3>Add a student</h3>
        </div>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-4 col-form-label">First name</label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={newStudentFirstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-4 col-form-label">Last name</label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={newStudentLastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-4 col-form-label">E-mail</label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="email"
              value={newStudentEmail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="newStudentCampus" className="col-4 col-form-label">Campus</label>
          <div className="col-8">
            {/* This select needs to be hard-coded for now… */}
            <select className="custom-select">
              <option name="newStudentCampus" selected>Choose a campus…</option>
              <option name="newStudentCampus" value="8">Bartlett Hall</option>
              <option name="newStudentCampus" value="10">Bryn Mawr College</option>
              <option name="newStudentCampus" value="6">Phillips Academy</option>
              <option name="newStudentCampus" value="7">Stone Academy</option>
              <option name="newStudentCampus" value="9">Wesleyan University</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <span className="col-4" />
          <div className="col-8">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = function(state, ownProps) {
  return {
    newStudentFirstName: state.newStudentFirstName,
    newStudentLastName: state.newStudentLastName,
    newStudentEmail: state.newStudentEmail,
    newStudentCampus: state.newStudentCampus
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(writeStudentFirstName(event.target.value));
      dispatch(writeStudentLastName(event.target.value));
      dispatch(writeStudentEmail(event.target.value));
    },
    handleSubmit(firstName, lastName, email, campusId, event) {
      event.preventDefault();

      // const { campusId } = ownProps;

      dispatch(postStudent({ firstName, lastName, email, campusId }));
      dispatch(writeStudentFirstName(''));
      dispatch(writeStudentLastName(''));
      dispatch(writeStudentEmail(''));
    }
  };
};

AddStudent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudent);

export default AddStudent;
