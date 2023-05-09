// TO-DO: Implement cards
// TO-DO: Implement add assignment
// TO-DO: Delete assignment in list after the text
// TO-DO: hrefs (all navigations)
// TO-DO: professor view course requests from student
import React, { useEffect, useState } from "react";
import {
  getCourse,
  deleteCourse,
  saveCourse,
  getCourseAssignment,
  getCourseAssignmentIds,
} from "./services/courseService";
import {
  getAssignment,
  getAssignments,
  deleteAssignment,
  saveAssignment,
} from "./services/assignmentService";
import { useParams } from "react-router-dom";
import Joi from "joi";
import StudentNavbar from "./StudentNavbar";
import StudentAssignmentCard from "./StudentAssignmentCard";
import { Link } from "react-router-dom";

const StudentAssignmentView = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [assignmentIds, setAssignmentIds] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    //gets the course by id
    async function fetchData() {
      const { data } = await getCourse(courseId);
      console.log(data);
      setCourse(data);
    }

    //gets the assignment ids from the course
    async function fetchAssignIdData() {
      const { data } = await getCourseAssignmentIds(courseId);
      console.log(data);
      setAssignmentIds(data);
    }

    //get assignment from each of the assignment ids from the course
    async function fetchAssignments() {
      assignmentIds.forEach((id) => {
        console.log("helloooo u");
        const data = getCourseAssignment(courseId, id);
        console.log(data);
        assignments.push(data);
      });
    }

    fetchData();
    fetchAssignIdData();
    //fetchAssignments();
  }, []);
  assignmentIds.forEach((id) => {
    console.log("helloooo u");
    const data = getCourseAssignment(courseId, id);
    console.log(data);
    assignments.push(data);
  });

  // if (assignmentIds.length != 0) {
  //   //   let ids = [];
  //   //   ids.push(course._assignmentsId);
  //   //   console.log(ids[0]);
  //   for (let i = 0; i < assignmentIds.length; i++) {
  //     assignments.push(getAssignment(assignmentIds[i]));
  //     console.log(assignments);
  //     i++;
  //   }
  // }

  // console.log(assignments);

  return (
    <React.Fragment>
      <StudentNavbar />
      <h1>This is: {courseId}</h1>
      <StudentAssignmentCard assignments={assignments} courseId={courseId} />
    </React.Fragment>
  );
};
export default StudentAssignmentView;
