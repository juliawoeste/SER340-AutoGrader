var mongoose = require("mongoose");

// Module variable
var Users = require("./models/users");
var Professor = require("./models/professor");
var Student = require("./models/student");
var Courses = require("./models/courses");
var Assignments = require("./models/assignments");
var Submissions = require("./models/submissions");

//Express Variables
var express = require('express');
var autoGraderRouter = express.Router();

// Connection URL
const uri = 
"mongodb+srv://hhanif:ser341@cluster0.wyu4ij4.mongodb.net/?retryWrites=true&w=majority"

// Connect using mongoose
mongoose.connect(uri, {useNewUrlParser: true});

// Open a connection and get a db handler
const db = mongoose.connection;

// Error handling
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("Connected");

    //Create Routes 

    // Insertion operation by creating a course(1)
   
    var newCourse1 = Courses ({
        courseName: "SER340",
        _assignmentsId: ["",""],
        _studentId: [""],
        _professorId: "2454674"
    });

    // Insertion operation by creating an assignment
    var newAssignment1 = Assignments ({
        assignmentTitle: "Milestone 1",
        dueDate: "3/26/2023",
        description: "In this milestone, you will design the database and build mongoose schemas for the database collections. You will also propose and design the endpoints. Use the requirements document form last semester and front-end implementation to identify the main collections in your database and routers needed. This milestone is 15% of the project",
        _submissionsId: [" ", " ", " "]
    });

    // Insertion operation by creating a submission
    var newSubmission = Submissions ({
        _assignmentId: " ",
        _studentId: " ", 
        grade: "A", 
        files: [" "],
        completionStatus: true
    });

    // Insertion operation by creating a student(1)
    var newStudent1 = Student ({
        name: "Rion-Mark McLaren Jr",
        email: "ramclaren@quinnipiac.edu",
        password: "rion123",
        _coursesId: [""]
    })

    // Insertion operation by creating a student(2)
    var newStudent2 = Student ({
        name: "Humna Hanif",
        email: "hhanif@quinnipiac.edu",
        password: "humna123",
        _coursesId: [""]
    })

    // Insertion operation by creating a student(3)
    var newStudent3 = Student ({
        name: "Julia Woeste",
        email: "jwoeste@quinnipiac.edu",
        password: "julia123",
        _coursesId: [""]
    })

    // Insertion operation by creating a professor(1)
    var newProfessor1 = Professor ({
        name: "Ruby ElKharboutly",
        email: "rehab.elkharboutly@quinnipiac.edu",
        password: "ruby123",
        _coursesId: [" ", " "]

    })

    // Insertion operation by creating a professor(2)
    var newProfessor2 = Professor ({
        name: "Jonathan Blake",
        email: "jonathan.blake@quinnipiac.edu",
        password: "jonathan123",
        _coursesId: [" ", " ", " "]
    })

    //Save Course
newCourse1.save((err) => {
    if (err) console.error(err);
    console.log("Course created");
    Courses.find({}, (err, courses) => {
        if (err) console.error(err);
        console.log(courses);
    });
    });
    
    //Save Assignment
    newAssignment1.save((err) => {
    if (err) console.error(err);
    console.log("Assignment created");
    Assignments.find({}, (err, courses) => {
        if (err) console.error(err);
        console.log(courses);
    });
    });
    
    //Save Submission
    newSubmission.save((err) => {
    if (err) console.error(err);
    console.log("Submission created");
    Submissions.find({}, (err, submissions) => {
        if (err) console.error(err);
        console.log(submissions);
    });
    });
    
    //Save Professors
    newProfessor1.save((err) => {
    if (err) console.error(err);
    console.log("Professor created");
    Professor.find({}, (err, professor) => {
        if (err) console.error(err);
        console.log(professor);
    });
    });
    
    newProfessor2.save((err) => {
    if (err) console.error(err);
    console.log("Professor created");
    Professor.find({}, (err, professor) => {
        if (err) console.error(err);
        console.log(professor);
    });
    });
    
    //Save Students
    newStudent1.save((err) => {
    if (err) console.error(err);
    console.log("Student created");
    Student.find({}, (err, student) => {
        if (err) console.error(err);
        console.log(student);
    });
    });
    
    newStudent2.save((err) => {
    if (err) console.error(err);
    console.log("Student created");
    Student.find({}, (err, student) => {
        if (err) console.error(err);
        console.log(student);
    });
    });
    
    newStudent3.save((err) => {
    if (err) console.error(err);
    console.log("Student created");
    Student.find({}, (err, student) => {
        if (err) console.error(err);
        console.log(student);
    });
    });
});



