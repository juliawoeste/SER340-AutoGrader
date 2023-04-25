// TO-DO: Implement connection to database where the input of the form meet the schema requirements and course is added
// TO-DO: hrefs (all navigations)
import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";

class AddCourse extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <form>
          <div className="form-group">
            <h4>Add Course</h4>
            <h6 style={{ marginTop: "2rem" }}>
              Please input the name of the course to be added.
            </h6>
            <label for="exampleInputEmail1">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Course Name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddCourse;
