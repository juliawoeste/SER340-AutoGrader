// TO-DO: hrefs (all navigations)
// TO-DO: Database connection

import React, { Component } from "react";
import Joi from "joi";
import StudentNavbar from "./StudentNavbar";

class StudentRequestCourse extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <StudentNavbar />
      // TO-DO: Course Cards
    );
  }
}

export default StudentRequestCourse;