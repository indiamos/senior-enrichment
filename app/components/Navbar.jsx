'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar (props) {

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Enrichalator</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/campuses">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/students">Students</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
