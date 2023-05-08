import http from "./httpService";
import * as config from "./config.json";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "student/register";

export function register(student) {
  return http.post(apiEndpoint, {
    email: student.email,
    password: student.password,
    name: student.name,
  });
}
