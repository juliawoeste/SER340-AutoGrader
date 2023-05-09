// TO-DO: Implement connection to database where the input of the form meet the schema requirements and course is added
// TO-DO: hrefs (all navigations)
import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import { Link, NavLink } from "react-router-dom";
import { getCourses, saveCourse } from "./services/courseService";

class AddCourse extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    newCourse: {
      courseName: "",
      courseTitle: "",
      _professorId: "",
    },
  };
  //ToDo implementation
  handleSubmit() {
    console.log("hiiiiii");
    saveCourse(this.state.newCourse);
  }

  render() {
    return (
      <React.Fragment>
        <ProfessorNavbar />
        <section className="glasscard">
          <form>
            <div className="form-group">
              <h4>Add Course</h4>
              <h6 style={{ marginTop: "2rem" }}>
                Please input the Course Name and Course Title to be added.
              </h6>
              <label>Course Name</label>
              <input
                defaultValue={this.state.newCourse.courseName}
                type="text"
                className="form-control"
                id="courseName"
                aria-describedby="emailHelp"
                placeholder="Enter Course Name (e.g. MA229)"
              />
              <label style={{ marginTop: "2rem" }}>Course Title</label>
              <input
                defaultValue={this.state.newCourse.courseTitle}
                type="text"
                className="form-control"
                id="courseDescription"
                aria-describedby="emailHelp"
                placeholder="Enter Course Title (e.g. Linear Algebra)"
              />
            </div>
            {/* <Link to="/professorCourses"> */}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              style={{ marginTop: "3rem" }}
            >
              Submit
            </button>
            {/* </Link> */}
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default AddCourse;
