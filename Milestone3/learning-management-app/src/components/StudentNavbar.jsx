// TO-DO: hrefs (all navigations)
// TO-DO: Names

import React, { Component } from "react";
import Joi from "joi";
import { NavLink } from "react-router-dom";

class StudentNavbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" style={{ paddingLeft: "1rem" }} href="#">
          Student Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/studentCourses">
                View Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/requestCourse">
                Request Course
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={{ paddingLeft: "60rem" }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default StudentNavbar;
