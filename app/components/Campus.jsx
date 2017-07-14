import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campus( props ) {
  // props *should* contain { students, campus }
  console.log('props:', props);

  // // props is just getting the router props (history, location, match) and does not include students or campuses, so everything after this point fails with
  //      Uncaught TypeError: Cannot read property 'filter' of undefined.
  // More specific props need to be passed in from the route definition on Root.js, currently
  //      <Route path="/campuses/:campusId" component={Campus}/>
  // Something like
  //      <Route path="/campuses/:campusId" render={() => (<Campus campuses={campuses} students={students} />)}/>
  // but that errors out with
  //      Uncaught ReferenceError: campuses is not defined
  // The props `Campus` should *actually* be getting are `{ campus, students }` where students is filtered to this particular campus, though we could also take in all students and then filter them afterward. So line 5 above should ideally be
  //      function Campus({ students, campuses }) {

  return (
    <section className="container">
      <p>this is where the stuff should be</p>
      {/* Describe the campus—maybe include a photo, caption, and map link, fun stuff like that…
      <div className="row">
        <h2>{campus.name}</h2>
      </div>

      <figure>
        <img src={campus.image} alt={selectedCampus.imageAlt || ''} />
        <figcaption>{campus.imageCaption || ''}</figcaption>
      </figure>*/}
    </section>
  );
}

// If we have a campus ID and an array of students, we can filter them as follows:
const getCampusStudents = (campusId, students) => {
 students.filter(student => {
   return campusId === Number(student.campusId);
 });
};

const mapStateToProps = ( state, ownProps ) => {
  return {
    students: getCampusStudents(ownProps.match.params.campusId, state.students),
    campus: state.selectedCampus
  };
}

export default connect(mapStateToProps, null)(Campus);
