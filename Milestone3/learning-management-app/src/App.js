import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserRoles from "./components/UserRoles";
import LoginForm from "./components/LoginFormProfessor";
import ProfessorCourses from "./components/ProfessorCourses";
import AddCourse from "./components/AddCourse";
import ProfessorAssignmentView from "./components/ProfessorAssignmentView";
import AddAssignment from "./components/AddAssignment";
import AddStudent from "./components/AddStudent";
import StudentAssignmentView from "./components/StudentAssignmentView";
import AddSubmission from "./components/AddSubmission";
import StudentSubmissionView from "./components/StudentSubmissionView";
import ProfessorSubmissionView from "./components/ProfessorSubmissionView";
import StudentCourses from "./components/StudentCourses";
import RequestCourse from "./components/StudentRequestCourse";
import NoMatch from "./components/NoMatch.jsx";
import LoginFormProfessor from "./components/LoginFormProfessor";
import LoginFormStudent from "./components/LoginFormStudent";

//ToDo Refactor Router Paths, Include ids
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserRoles />} />
        <Route path="/professorLogin" element={<LoginFormProfessor />} />
        <Route path="/studentLogin" element={<LoginFormStudent />} />
        <Route
          path="/professorCourses/professorAssignmentView/addAssignment"
          element={<AddAssignment />}
        />
        <Route
          path="/professorCourses/professorAssignmentView"
          element={<ProfessorAssignmentView />}
        />
        <Route path="/professorCourses" element={<ProfessorCourses />} />
        <Route path="/addCourse" element={<AddCourse />} />

        <Route
          path="/professorCourses/professorAssignmentView/professorSubmissionView"
          element={<ProfessorSubmissionView />}
        />
        <Route path="/addStudent" element={<AddStudent />} />

        <Route path="/studentCourses" element={<StudentCourses />} />
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route
          path="/studentAssignmentView"
          element={<StudentAssignmentView />}
        />
        <Route
          path="/studentSubmissionView"
          element={<StudentSubmissionView />}
        />
        <Route path="/addSubmission" element={<AddSubmission />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
