// TO-DO: hrefs (all navigations)
// TO-DO: Names

import React, { Component } from "react";
import Joi from "joi";

class ProfessorNavbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" style={{ paddingLeft: "1rem" }} href="#">
          Professor Name
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
              <a className="nav-link" href="#">
                View Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Course
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Student
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ paddingLeft: "60rem" }}>
                Logout
              </a>
            </li>
           
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProfessorNavbar;
