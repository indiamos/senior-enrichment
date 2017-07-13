import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campus(props) {
  // console.log('props:',props);

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
  // If we have passed in all students, we would filter them as follows:
  //      const campus = campuses.filter(function(campus) {
  //        return campus.id === Number(props.match.params.campusId)
  //      });

  return (
    <section className="container">
      <div className="row">
        <h2>{campus.name}</h2>
      </div>

      <figure>
        <img src={campus.image} alt={campus.imageAlt || ''} />
        <figcaption>{campus.imageCaption || ''}</figcaption>
      </figure>
    </section>
  );
}

export default Campus;
