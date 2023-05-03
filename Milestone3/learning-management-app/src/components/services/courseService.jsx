import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-access-token"] = jwt;
import http from "./httpService";
import { getJwt } from "./authService";
import * as config from "../config.json";


const { apiUrl } = config;

const apiEndpoint = apiUrl + "courses";

function courseUrl(id) { //combines id with API
  return `${apiEndpoint}/${id}`;
}

export function getCourses() { //gets all courses
  http.setJwt(getJwt()); //sets and gets the token
  return http.get(apiEndpoint);
}

export function getCourse(courseId) { //gets course by id
  http.setJwt(getJwt());
  return http.get(courseUrl(courseId));
}

export function saveCourse(course) { //saves course
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

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
