import React, {Component} from 'react';
import Joi from 'joi';
import StudentNavbar from './StudentNavbar';
import ProfessorNavbar from './ProfessorNavbar';

class ProfessorSubmissionView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
            <ProfessorNavbar />
        <body>
            <section
              className="glasscard"
              style={{width: "70rem", height: "50rem", marginTop: "3rem"}}
            >
              <div className="title">
                <h4>Assignment</h4>
                <div className="row" style={{paddingLeft: "50px"}}>
                  <div className="row" style={{marginTop: "15px"}}>

                  </div>
                  <div className="row" style={{marginTop: "15px"}}>
                    <h5>Assignment Title</h5>
                  </div>
                  <div className="row" style={{marginTop: "1px"}}><h6></h6></div>
                  <div className="row" style={{marginTop: "15px"}}>
                    <h5>Assignment Due Date</h5>
                  </div>
                  <div className="row" style={{marginTop: "1px"}}><h6></h6></div>
                  <div className="row" style={{marginTop: "15px"}}>
                    <h5>Assignment Description</h5>
                  </div>
                  <div className="row" style={{marginTop: "1px"}}>
                    <h6>
                     
                    </h6>
                  </div>
                  <div className="row" style={{marginTop: "30px"}}>
                    <h5>Assignment File(s)</h5>
                  </div>
                  <div className="row" style={{marginTop: "1px"}}>
                    <a href="Milestone 3.pdf"></a>
                  </div>
                  <div className="row" style={{marginTop: "30px"}}>
                    
                  </div>
                  <div className="row" style={{marginTop: "1px"}}>
                    <a href="Milestone 3.pdf"></a>
                  </div>
                  <div className="row" style={{marginTop: "30px"}}><h5>Grade: </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Grade for Assignment"
                    style={{width: "15rem"}}
            />
                  </div>
                </div>
              </div>
            </section>
          </body> 
          </div>);
    }
}
 
export default ProfessorSubmissionView