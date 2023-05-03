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
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};


// const courses = [
//   {
//     id: 1,
//     name: "SER341",
//     summary: "It's a course",
//     assignments: {
//       id: 1,
//       name: "",
//       dueDate: "",
//       description: "",
//       submissions: {
//         id: 1,
//         studentName: "",
//         grade: "",
//         completitionStatus: "",
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "SER120",
//     summary: "It's a course",
//   },
//   {
//     id: 3,
//     name: "SER490",
//     summary: "It's a course",
//   },
//   {
//     id: 4,
//     name: "SER200",
//     summary: "It's a course",
//   },
// ];
// export function getCourses() {
//   return courses;
// }
