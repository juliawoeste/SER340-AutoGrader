// TO-DO: Implement cards
// TO-DO: Implement add assignment
// TO-DO: Delete assignment in list after the text
// TO-DO: hrefs (all navigations)

import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";

class ProfessorAssignmentView extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <div class="card" style={{ width: "18rem", align: "center" }}>
          <div class="card-header">Course Assignments</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Assignment 1</li>
            <li class="list-group-item">Assignment 2</li>
            <li class="list-group-item">Assignment 3</li>
          </ul>
          <button className="btn btn-primary">Add Assignment</button>
        </div>
      </div>
    );
  }
}

export default ProfessorAssignmentView;
