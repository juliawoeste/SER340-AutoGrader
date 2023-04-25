import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ProfessorCourses from "./components/ProfessorCourses";
import AddCourse from "./components/AddCourse";
import ProfessorAssignmentView from "./components/ProfessorAssignmentView";
import AddAssignment from "./components/AddAssignment";

function App() {
  return (
    <div className="App">
      <AddAssignment />
    </div>
  );
}

export default App;
