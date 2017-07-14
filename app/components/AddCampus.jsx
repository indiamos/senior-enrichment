import React from 'react';
import { connect } from 'react-redux';
import { postCampus, addCampus } from '../store';

function AddCampus({ newCampusName, newCampusImage, handleChange, handleSubmit }) {
  return (
    <div className="container">
      <form id="new-campus-form" onSubmit={event => handleSubmit(name, image, event)}>
        <div className="form-group row">
          <h3>Add a campus</h3>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-4 col-form-label">Name</label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="name"
              value={newCampusName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-4 col-form-label">Image URL</label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="image"
              value={newCampusImage}
              onChange={handleChange}
            />
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
    newCampusName: state.newCampusName,
    newCampusImage: state.newCampusImage
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(addCampus(name.value, image.value));
    },
    handleSubmit(name, image, event) {
      event.preventDefault();

      dispatch(postCampus({ name, image }));
      dispatch(addCampus('', ''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCampus);
