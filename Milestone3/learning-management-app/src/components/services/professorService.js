import http from "./httpService";
import * as config from "./config.json";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "professor/register";

export function register(professor) {
  return http.post(apiEndpoint, {
    email: professor.email,
    password: professor.password,
    name: professor.name,
  });
}
