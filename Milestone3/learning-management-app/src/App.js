import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ProfessorCourses from "./components/ProfessorCourses";
import AddCourse from "./components/AddCourse";
import ProfessorAssignmentView from "./components/ProfessorAssignmentView";
import AddAssignment from "./components/AddAssignment";
import AddStudent from './components/AddStudent';
import StudentAssignmentView from './components/StudentAssignmentView';
import AddSubmission from './components/AddSubmission';
import StudentAssignmentSubmitted from './components/StudentSubmissionView';
import ProfessorSubmissionView from './components/ProfessorSubmissionView';

function App() {
  return (
    <div className="App">
      <StudentAssignmentView />
    </div>
  );
}

export default App;
