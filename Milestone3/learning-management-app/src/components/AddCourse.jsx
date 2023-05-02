// TO-DO: Implement connection to database where the input of the form meet the schema requirements and course is added
// TO-DO: hrefs (all navigations)
import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import { Link, NavLink } from "react-router-dom";
import { getCourses } from "./services/courseService";

class AddCourse extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    courses: getCourses(),
    newCourse: {
      id: "",
      name: "",
      summary: "",
    },
  };
  //ToDo implementation
  onSubmit() {
    const courses = [...this.state.courses];
    const newCourse = [this.state.newCourse];
    newCourse.id = courses.length();
    courses.push(newCourse);

    this.setState({ courses });
  }

  render() {
    return (
      <div>
        <ProfessorNavbar />
        <section className="glasscard">
          <form>
            <div className="form-group">
              <h4>Add Course</h4>
              <h6 style={{ marginTop: "2rem" }}>
                Please input the name and description of the course to be added.
              </h6>
              <label for="courseName">Course Name</label>
              <input
                value={this.state.newCourse.name}
                type="text"
                className="form-control"
                id="courseName"
                aria-describedby="emailHelp"
                placeholder="Enter Course Name"
              />
              <label for="courseDescription" style={{ marginTop: "2rem" }}>
                Course Description
              </label>
              <input
                value={this.state.newCourse.summary}
                type="text"
                className="form-control"
                id="courseDescription"
                aria-describedby="emailHelp"
                placeholder="Enter Course Description"
              />
            </div>
            <Link to="/professorCourses">
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={""}
                style={{ marginTop: "3rem" }}
              >
                Submit
              </button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}

export default AddCourse;
