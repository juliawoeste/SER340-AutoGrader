//Made By: Rion-Mark McLaren Jr
//Server that handles REST requests for courses url

var express = require("express");
var coursesRouter = express.Router();
/** 1- declare mongoose and courses **/
const mongoose = require("mongoose");
const courses = require("../models/courses");
const assignments = require("../models/assignments");

coursesRouter
  .route("/")
  .get((req, res, next) => {
    //chained into route(), no semi-colon after the all implementation
    // 2- implement get to return all courses
    courses.find({}, (err, course) => {
      if (err) throw err;

      res.json(course);
    });
  })

  .post((req, res, next) => {
    // 3- implement post request to insert a course into database
    courses.create(req.body, (err, course) => {
      if (err) throw err;

      console.log("Course created");
      let id = course._id;
      res.send("Course added with id " + id);
    });
  });

coursesRouter
  .route("/:courseId") // a second router is define using parameters.
  .get((req, res, next) => {
    // 4- find by id
    courses.findById(req.params.courseId, (err, course) => {
      if (err) throw err;
      res.json(course);
    });
  })

  .put((req, res, next) => {
    // 5- implement post request to update a specific course
    //This replaces everything about a course, perhaps make it more specific in the future
    courses.findByIdAndUpdate(
      req.params.courseId,
      { $set: req.body },
      { new: true },
      (err, course) => {
        if (err) throw err;
        res.json(course);
      }
    );
  })

  .delete((req, res, next) => {
    // 6- delete specific course in the collection
    courses.findByIdAndRemove(req.params.courseId, (err, course) => {
      if (err) throw err;
      res.json(course);
    });
  });

coursesRouter
  .route("/:courseId/assignments") //router to access assignments in a course
  //get the ids of all the assignments in the courses
  .get((req, res, next) => {
    courses.findById(
      req.params.courseId
        .populate("_assignmentsId") //1.1.6 add code to populate recipe
        .exec(function (err, course) {
          console.log(err);
          //  console.log(recipe);
          //get the recipes collection as an array,received as the recipe param
          if (err) throw err; //propagate error
          res.json(course); // convert to json and return in res
        })
    );
  //   courses.findById(req.params.courseId, (err, course) => {
  //     if (err) throw err;
  //     //return the ids of the assignments in the course
  //     res.json(course._assignmentsId);
  //   });
   });

coursesRouter
  .route("/:courseId/assignments/:assignmentId") //router to access specific assignments in a course
  .get((req, res, next) => {
    assignments.findById(req.params.assignmentId, (err, assignment) => {
      if (err) throw err;
      res.json(assignment);
    });
  })
  //add a new assignment id to the list of assignment ids in a course
  .put((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      if (err) throw err;
      course._assignmentsId.push(req.params.assignmentsId);
      course.save((err, course) => {
        if (err) throw err;
        console.log("Assignment Id added");
        res.json(course);
      });
    });
  })

  //remove a specific assignment id from the list of ids
  .delete((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      for (var i = course._assignmentsId.length - 1; i >= 0; i--) {
        if (course._assignmentsId[i] == req.params.assignmentId)
          course._assignmentsId[i].remove(); //remove a single assignment
      }
      course.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
      });
    });
  });

coursesRouter
  .route("/:courseId/students") //router to access students in a course

  //get the ids of all the students in the course
  .get((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      if (err) throw err;
      //return the ids of the assignments in the course
      res.json(course._studentsId);
    });
  });

coursesRouter
  .route("/:courseId/students/:studentId") //router to access assignments in a course
  .put((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      if (err) throw err;
      course._studentsId.push(req.params.studentId);
      course.save((err, course) => {
        if (err) throw err;
        console.log("Student Id added");
        res.json(course);
      });
    });
  })

  //remove a specific student id from the list of ids
  .delete((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      for (var i = course._studentsId.length - 1; i >= 0; i--) {
        if (course._studentsId[i] == req.params.studentsId) {
          course._studentsId[i].remove(); //remove a single student
        }
      }
      course.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
      });
    });
  });

module.exports = coursesRouter;
