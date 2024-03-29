import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfessorCourseCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { courses } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h3 style={{ marginTop: "4rem" }}>
              There are {courses.length} courses!
            </h3>
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
                    <Link to={`/professorCourses/${course._id}`}>
                      <button
                        onClick={() => ""}
                        className="btn btn-primary"
                        style={{ marginLeft: "1rem" }}
                      >
                        View Course
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        this.props.onDelete(course);
                      }}
                      className="btn btn-primary"
                      style={{ marginLeft: "1rem" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfessorCourseCard;
