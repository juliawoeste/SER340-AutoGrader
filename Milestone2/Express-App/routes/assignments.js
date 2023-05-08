var express = require("express");
var assignmentsRouter = express.Router();
/** 1- declare mongoose and assignments **/
const mongoose = require("mongoose");
const assignments = require("../models/assignments");

assignmentsRouter
  .route("/")
  .get((req, res, next) => {
    //chained into route(), no semi-colon after the all implementation
    // 2- implement get to return all assignments
    assignments.find({}, (err, assignments) => {
      if (err) throw err;

      res.json(assignments);
    });
  })

  .post((req, res, next) => {
    // 3- implement post request to insert a assignments into database
    assignments.create(req.body, (err, assignments) => {
      if (err) throw err;

      console.log("assignment created");
      let id = assignments._id;
      res.send("assignment added with id " + id);
    });
  });

assignmentsRouter
  .route("/:assignmentsId")
  .get((req, res, next) => {
    // 4- find by id
    assignments.findById(req.params.assignmentsId, (err, assignments) => {
      console.log(err);
      console.log(assignments);
      if (err) throw err;
      res.json(assignments);
    });
  })

  .put((req, res, next) => {
    // 5- implement post request to update a specific assignments
    //This replaces everything about a assignments, perhaps make it more specific in the future
    assignments.findByIdAndUpdate(
      req.params.assignmentsId,
      { $set: req.body },
      { new: true },
      (err, assignments) => {
        if (err) throw err;
        res.json(assignments);
      }
    );
  })

  .delete((req, res, next) => {
    // 6- delete specific assignment in the collection
    assignments.findByIdAndRemove(
      req.params.assignmentsId,
      (err, assignments) => {
        if (err) throw err;
        res.json(assignments);
      }
    );
  });

assignmentsRouter.route("/:assignmentsId/submissions").get((req, res, next) => {
  assignments.findById(req.params.assignmentsId, (err, assignments) => {
    if (err) throw err;
    //return the ids of all the submissions in the assignment
    res.json(assignments._submissionsId);
  });
});

assignmentsRouter
  .route("/:assignmentsId/submissions/:submissionsId")
  //add a new submission id to the list of submission ids an assignments has
  .put((req, res, next) => {
    assignments.findById(req.params.assignmentsId, (err, assignments) => {
      if (err) throw err;
      assignments._submissionsId.push(req.params.submissionsId);
      assignments.save((err, assignments) => {
        if (err) throw err;
        console.log("Submission Id added");
        res.json(assignments);
      });
    });
  })

  //remove a specific submission id from the list of ids
  .delete((req, res, next) => {
    assignments.findById(req.params.assignmentsId, (err, assignments) => {
      for (var i = assignments._submissionsId.length - 1; i >= 0; i--) {
        if (assignments._submissionsId[i] == req.params.submissionsId) {
          assignments._submissionsId[i].remove(); //remove a single assignments
        }
      }
      assignments.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
      });
    });
  });

module.exports = assignmentsRouter;
