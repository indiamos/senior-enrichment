import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import AllStudents from './AllStudents';
import Campus from './Campus';
import CampusList from './CampusList';
// import Student from './Student';
import StudentList from './StudentList';
import StudentTable from './StudentTable';

import store, { fetchStudents, fetchCampuses } from '../store';

export default class Root extends Component {

  componentDidMount () {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    // console.log('store:', store); // contains just what's literally in the store component, not data. See `what's in store.js`.
    // console.log('state:', state);  // Uncaught ReferenceError: state is not defined
    // console.log('props:', props); // Uncaught ReferenceError: props is not defined
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route path="/campuses/:campusId/new-student" component={AddStudent} />
              <Route path="/campuses/:campusId/students" render={(props) => (<StudentList {...props}/>)}/>
              <Route path="/campuses/new-campus" component={AddCampus} />
              <Route path="/campuses/:campusId" component={Campus}/>
              {/*
              <Route path="/campuses/:campusId" render={() => (<Campus campuses={campuses} students={students} />)}/>
              <Route path="/students/:studentId" component={Student} />
              */}
              <Route path="/students/new-student" component={AddStudent} />
              <Route path="/students" component={AllStudents} />
              <Route path="/campuses" component={CampusList} />
              <Route component={CampusList} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

