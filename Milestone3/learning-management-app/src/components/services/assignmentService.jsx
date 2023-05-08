import http from "./httpService";
import { getJwt } from "./authService";
import * as config from "./config.json";
import axios from "axios";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "assignments";

function assignmentUrl(id) {
  //combines id with API
  return `${apiEndpoint}/${id}`;
}

export function getAssignments() {
  //gets all assignments
  http.setJwt(getJwt()); //sets and gets the token
  return http.get(apiEndpoint);
}

export function getAssignment(assignmentId) {
  //gets assignment by id
  http.setJwt(getJwt());
  console.log(assignmentUrl(assignmentId));
  return http.get(assignmentUrl(assignmentId));
}

export function saveAssignment(assignment) {
  //saves assignment
  http.setJwt(getJwt());
  if (assignment._id) {
    const body = { ...assignment };
    delete body._id;
    return http.put(assignmentUrl(assignment._id), body);
  }

  return http.post(apiEndpoint, assignment);
}

export function deleteAssignment(assignmentId) {
  http.setJwt(getJwt());
  return http.delete(assignmentUrl(assignmentId));
}
