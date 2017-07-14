import React from 'react';
import { Route, Switch, Redirect, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AddCampusButton from './AddCampusButton';
// import Campus from './Campus';
import CampusThumbnail from './CampusThumbnail';
import store, { fetchCampus } from '../store';

/* -----------------    COMPONENT     ------------------ */

function CampusList({ students, campuses, fetchCampus }) {

  return (
    <section className="container">
      <div className="row">
        <h2>Our campuses</h2>
      </div>
      <AddCampusButton />
      <ul className="campuslist row">
        {
          campuses.map(campus => {
            return (
              <li key={campus.id} className="col-sm-6 col-md-4">
                <NavLink to={`/campuses/${campus.id}`} onClick={ () => { dispatch(fetchCampus(campus.id)) } }>
                  <h3>{campus.name}</h3>
                  <figure className="thumbnail">
                    <img src={campus.image} alt={campus.imageAlt || ''} />
                  </figure>
                  {
                    // Not working yet, but intended to replace the 4 lines above it:
                    // <CampusThumbnail />
                  }
                </NavLink>
              </li>
            );
          })
        }
    </ul>
    </section>
  );
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = {
  fetchCampus
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList));
