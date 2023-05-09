import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentRequestCourseCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { courses } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h3 style={{ marginTop: "4rem" }}>
            There are {courses.length} courses!
          </h3>
          <h4>Select a course to request access to.</h4>
        </div>
        <div className="row" style={{ marginTop: "4rem" }}>
          {courses.map((course, index) => (
            <div className="col-sm">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="card-title">{course.courseName}</h5>
                </div>
                <div className="card-body h-50">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {course.type}
                  </h6>
                  <h4 className="card-text">{course.courseTitle}</h4>
                </div>
                <div className="card-body">
                  <Link to={`/studentCourses`}>
                    <button
                      onClick={() => ""}
                      className="btn btn-primary"
                      style={{ marginLeft: "1rem" }}
                    >
                      Request Course
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentRequestCourseCard;
