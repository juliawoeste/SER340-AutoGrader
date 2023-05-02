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
            <h3>There are {courses.length} courses!</h3>
          </div>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-sm">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="card-title">{course.name}</h5>
                  </div>
                  <div className="card-body h-50">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {course.type}
                    </h6>
                    <p className="card-text">{course.summary}.</p>
                  </div>
                  <div className="card-body">
                    <Link to={"/professorCourses/professorAssignmentView"}>
                      <button onClick={() => ""} class="btn btn-primary">
                        View Course
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        this.props.onDelete(course);
                      }}
                      class="btn btn-primary"
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