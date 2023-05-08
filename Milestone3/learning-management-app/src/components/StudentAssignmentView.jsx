// TO-DO: hrefs (all navigations)
// TO-DO: Database connection

import React, { Component } from "react";
import Joi from "joi";
import StudentNavbar from "./StudentNavbar";

class StudentAssignmentView extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <StudentNavbar />
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-header">Course Assignments</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Assignment 1</li>
            <li class="list-group-item">Assignment 2</li>
            <li class="list-group-item">Assignment 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StudentAssignmentView;
