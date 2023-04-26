// TO-DO: Implement connection to database where the input of the form meet the schema requirements and course is added
// TO-DO: hrefs (all navigations)
// TO-Do: implement file upload
import React, { Component } from "react";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";

class AddSubmission extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ProfessorNavbar />
        <form>
          <div className="form-group" style={{paddingBottom: "2rem"}}>
            <h4>Add Submission</h4>
            <h6 style={{ marginTop: "2rem" }}>
              Please submit file for assignment name.
            </h6>
            <label for="name" style={{paddingTop: "2rem"}}>Files</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter File Path"
              style={{width: "15rem"}}
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddSubmission;
