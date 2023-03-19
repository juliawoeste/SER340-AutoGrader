var mongoose = require("mongoose");

// Module variable
var Admin = require("./models/admin");
var Professor = require("./models/professor");
var Student = require("./models/student");
var Courses = require("./models/courses");



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
    // Insertion operation by creating a course
    var newCourse = Courses ({
        courseName: "SER340",
        assignments: [{
            assignmentTitle: "Milestone 1",
            status: false,
            dueDate: "03/28/2023",
            description: "In this milestone, you will design the database and build mongoose schemas for the database collections. You will also propose and design the endpoints. Use the requirements document form last semester and front-end implementation to identify the main collections in your database and routers needed. This milestone is 15% of the project",
            grades: [{letterGrade: "A"}]
        }]
        
        
    });

    // Save course
    newCourse.save((err) => {
        if (err) console.error(err);
        console.log("Course created");
        Courses.find({}, (err, courses) => {
            if (err) console.error(err);
            console.log(courses);

            db.collection("Courses").drop(() => {
                db.close();
            });
        });
    });
    
});



