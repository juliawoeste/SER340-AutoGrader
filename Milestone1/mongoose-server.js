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
    // Insertion operation by creating a course(1)
    var newCourse1 = Courses ({
        courseName: "SER340",
        assignments: [{
            assignmentTitle: "Milestone 1",
            status: false,
            dueDate: "03/28/2023",
            description: "In this milestone, you will design the database and build mongoose schemas for the database collections. You will also propose and design the endpoints. Use the requirements document form last semester and front-end implementation to identify the main collections in your database and routers needed. This milestone is 15% of the project",
            grades: [{letterGrade: "A"}]
        }]        
    });

    // Insertion operation by creating a course(2)
    var newCourse2 = Courses ({
        courseName: "SER341",
        assignments: [{
            assignmentTitle: "Milestone 1",
            status: false,
            dueDate: "03/28/2023",
            description: "In this milestone, you will design the database and build mongoose schemas for the database collections. You will also propose and design the endpoints. Use the requirements document form last semester and front-end implementation to identify the main collections in your database and routers needed. This milestone is 15% of the project",
            grades: [{letterGrade: "A"}]
        }]        
    });
    
    // Insertion operation by creating a admin(1)
    var newAdmin1 = Admin ({
        name: "Administrator1",
        email: "admin1@gmail.com",
        password: "password123"
    })

    // Insertion operation by creating a admin(2)
    var newAdmin2 = Admin ({
        name: "Administrator2",
        email: "admin2@gmail.com",
        password: "password1234"
    })

    // Insertion operation by creating a professor(1)
    var newProfessor1 = Professor ({
        name: "Ruby ElKharboutly",
        email: "rehab.elkharboutly@quinnipiac.edu",
        password: "ruby123"
    })

    // Insertion operation by creating a professor(2)
    var newProfessor2 = Professor ({
        name: "Jonathan Blake",
        email: "jonathan.blake@quinnipiac.edu",
        password: "jonathan123"
    })

    // Insertion operation by creating a student(1)
    var newStudent1 = Student ({
        name: "Rion-Mark McLaren Jr",
        email: "ramclaren@quinnipiac.edu",
        password: "rion123"
    })

    // Insertion operation by creating a student(2)
    var newStudent2 = Student ({
        name: "Humna Hanif",
        email: "hhanif@quinnipiac.edu",
        password: "humna123"
    })

    // Insertion operation by creating a student(3)
    var newStudent2 = Student ({
        name: "Julia Woeste",
        email: "jwoeste@quinnipiac.edu",
        password: "julia123"
    })

    //Save courses
    newCourse1.save((err) => {
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

    newCourse2.save((err) => {
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


    //Save Admins
    newAdmin1.save((err) => {
        if (err) console.error(err);
        console.log("Administrator created");
        Admin.find({}, (err, admin) => {
            if (err) console.error(err);
            console.log(admin);

            db.collection("Admin").drop(() => {
                db.close();
            });
        });
    });

    newAdmin2.save((err) => {
        if (err) console.error(err);
        console.log("Administrator created");
        Admin.find({}, (err, admin) => {
            if (err) console.error(err);
            console.log(admin);

            db.collection("Admin").drop(() => {
                db.close();
            });
        });
    });

    //Save Professors
    newProfessor1.save((err) => {
        if (err) console.error(err);
        console.log("Professor created");
        Professor.find({}, (err, professor) => {
            if (err) console.error(err);
            console.log(professor);

            db.collection("Professor").drop(() => {
                db.close();
            });
        });
    });

    newProfessor2.save((err) => {
        if (err) console.error(err);
        console.log("Professor created");
        Professor.find({}, (err, professor) => {
            if (err) console.error(err);
            console.log(professor);

            db.collection("Professor").drop(() => {
                db.close();
            });
        });
    });

    //Save Students
    newStudent1.save((err) => {
        if (err) console.error(err);
        console.log("Student created");
        Student.find({}, (err, student) => {
            if (err) console.error(err);
            console.log(student);

            db.collection("Student").drop(() => {
                db.close();
            });
        });
    });

    newStudent2.save((err) => {
        if (err) console.error(err);
        console.log("Student created");
        Student.find({}, (err, student) => {
            if (err) console.error(err);
            console.log(student);

            db.collection("Student").drop(() => {
                db.close();
            });
        });
    });

    //Delete course(1)
    newCourse1.remove({}, (err) => {
        if (err) console.error(err);
        console.log("Course deleted");
    });

    //Delete admin(2)
    newAdmin2.remove({}, (err) => {
        if (err) console.error(err);
        console.log("Admin deleted");
    });

    //Delete professor(1)
    newProfessor1.remove({}, (err) => {
        if (err) console.error(err);
        console.log("Professor deleted");
    });

    //Delete student(2)
    newStudent2.remove({}, (err) => {
        if (err) console.error(err);
        console.log("Student deleted");
    });
});



