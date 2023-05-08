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
  getCourseAssignments,
} from "./services/courseService";
import {
  getAssignment,
  getAssignments,
  deleteAssignment,
  saveAssignment,
} from "./services/assignmentService";
import { useParams } from "react-router-dom";
import Joi from "joi";
import ProfessorNavbar from "./ProfessorNavbar";
import ProfessorAssignmentCard from "./professorAssignmentCard";
import { Link } from "react-router-dom";

const ProfessorAssignmentView = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [assignmentIds, setAssignmentIds] = useState([]);
  const [assignments, setAssignment] = useState([]);

  useEffect(() => {
    //gets the course by id
    async function fetchData() {
      const { data } = await getCourse(courseId);
      console.log(data);
      setCourse(data);
    }

    //gets the assignment ids from the course
    async function fetchAssignIdData() {
      const { data } = await getCourseAssignments(courseId);
      console.log(data);
      setAssignmentIds(data);
    }

    //get assignment from each of the assignment ids from the course
    async function fetchAssignments() {
      await assignmentIds.forEach((id) => {
        console.log(getAssignment(id));
      });
    }

    fetchData();
    fetchAssignIdData();
    //fetchAssignments();
  }, []);

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
  // const handleDelete = async (assignment) => {
  //   console.log(assignment);
  //   const newAssignments = assignments.filter((p) => p._id !== assignment._id);

  //   setAssignments(newAssignments);
  //   try {
  //     await deleteAssignment(assignment._id);
  //   } catch (ex) {
  //     console.log("delete exception");
  //     if (ex.respond && ex.respond.status === 404) {
  //       alert("Assignment has already been deleted !");
  //       setAssignments(assignments);
  //     }
  //   }
  // };

  return (
    <React.Fragment>
      <ProfessorNavbar />
      <h1>This is: {courseId}</h1>
      <ProfessorAssignmentCard assignments={assignments} courseId={courseId} />
    </React.Fragment>
  );
};
export default ProfessorAssignmentView;
