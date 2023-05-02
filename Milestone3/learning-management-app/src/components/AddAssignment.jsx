import React, { Component } from "react";
import ProfessorNavbar from "./ProfessorNavbar";
import { NavLink } from "react-router-dom";

class AddAssignment extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <section className="glasscard">
          <form>
            <div className="form-group">
              <h4>Add Assignment</h4>
              <h6 style={{ marginTop: "2rem" }}>
                Please input the following to add an assignment to the course.
              </h6>
              <label for="exampleInputEmail1">Assignment Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Assignment Name"
              />
              <label for="exampleInputEmail1">
                Due Date (Format: MM/DD/YYYY)
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Due Date"
              />
              <label for="exampleInputEmail1">Description</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Description"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "3rem" }}
            >
              <NavLink
                className="nav-link"
                to="/professorCourses/professorAssignmentView"
              >
                Submit
              </NavLink>
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default AddAssignment;
