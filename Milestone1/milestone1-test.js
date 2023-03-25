//Module Variables
var Users = require("./models/users");
var Professor = require("./models/professor");
var Student = require("./models/student");
var Courses = require("./models/courses");
var Assignments = require("./models/assignments");
var Submissions = require("./models/submissions");

//Update Student 1's name
// Update ID for testing purposes
Student.findByIdAndUpdate('641f5fbe205b3c966391a5f4',
{name: 'Rion McLaren Jr'},
function (err, docs) {
    if (err) {
        console.log(err)
    } else {
        console.log("Updated User: ", docs);
    }
});

// Delete Course 1
// Make sure you comment out create/saving course and update ID for testing purposes
Courses.findByIdAndRemove('641f62f99285865d6318907b',
function (err, docs) {
    if (err) {
        console.log(err)
    } else {
        console.log("Deleted Course: ", docs);
    }
});
