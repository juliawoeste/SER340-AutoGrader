import http from "./httpService";
import { getJwt } from "./authService";
import * as config from "./config.json";
import axios from "axios";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "courses";

function courseUrl(id) {
  //combines id with API
  return `${apiEndpoint}/${id}`;
}

function courseAssignmentsUrl(id) {
  //combines id with API
  return `${apiEndpoint}/${id}/assignments`;
}

function courseAssignmentIdUrl(courseId, assignmentId) {
  return `${apiEndpoint}/${courseId}/assignments/${assignmentId}`;
}

export function getCourseAssignment(courseId, assignmentId) {
  http.setJwt(getJwt());
  return http.get(courseAssignmentIdUrl(courseId, assignmentId));
}

export function getCourses() {
  //gets all courses
  http.setJwt(getJwt()); //sets and gets the token
  return http.get(apiEndpoint);
}

export function getCourse(courseId) {
  //gets course by id
  http.setJwt(getJwt());
  return http.get(courseUrl(courseId));
}

export function getCourseAssignmentIds(courseId) {
  //gets course by id
  http.setJwt(getJwt());
  return http.get(courseAssignmentsUrl(courseId));
}

export function saveCourse(course) {
  //saves course
  http.setJwt(getJwt());
  if (course._id) {
    const body = { ...course };
    delete body._id;
    return http.put(courseUrl(course._id), body);
  }

  return http.post(apiEndpoint, course);
}

export function deleteCourse(courseId) {
  http.setJwt(getJwt());
  return http.delete(courseUrl(courseId));
}
