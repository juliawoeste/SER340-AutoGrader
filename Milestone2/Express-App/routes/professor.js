var express = require("express");
var professorRouter = express.Router();
var passport = require("passport");
var Verify = require("./verify"); // verfication
const bcrypt = require("bcrypt");
/** 1- declare mongoose and courses **/
const mongoose = require("mongoose");
const Professor = require("../models/professor");

professorRouter
  .route("/")
  .all((req, res, next) => {
    console.log(req.body);
    next();
  })
  .get((req, res, next) => {
    //chained into route(), no semi-colon after the all implementation
    // 2- implement get to return all professors
    Professor.find({}, (err, professors) => {
      if (err) throw err;

      res.json(professors);
    });
  });

professorRouter.post("/register", async function (req, res) {
  console.log(req.body);
  Professor.register(
    new Professor({ name: req.body.name, email: req.body.email }),
    req.body.password,
    function (err, professor) {
      console.log(err);
      if (err) return res.status(500).json({ err: err });
      passport.authenticate("local")(req, res, function () {
        console.log("authentication done");
        var token = Verify.getToken(professor);

        return res
          .status(200)
          .header("x-access-token", token)
          .header("access-control-expose-headers", "x-access-token")
          .json({ status: "Registration Successful !" });
      });
    }
  );
});
// 4- professor login
professorRouter.post("/login", (req, res, next) => {
  //req.body will have username and password
  console.log(req.body);
  passport.authenticate("local", function (err, professor, info) {
    console.log("authentication");
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!professor) {
      console.log("No professor information");
      return res.status(401).json({ err: info });
    }
    req.logIn(professor, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ err: "Could not log in professor" });
      }
      console.log("Professor in professors: ", professor);
      Professor.findOne(
        { email: professor.email },
        function (err, dbProfessor) {
          if (err) {
            return done(err);
          }
          if (!professor) {
            return done(null, false);
          }
          console.log("DB professor:", dbProfessor);
          var token = Verify.getToken(dbProfessor);
          res.status(200);
          res.send(token);
          //res.header("Auth", token);
        }
      );
    });
  })(req, res, next);
});

// 5- implementing logout
professorRouter.get("/logout", function (req, res) {
  req.logout();
  res.status(200).json({
    status: "Bye!",
  });
});

professorRouter
  .route("/:professorId")
  .get((req, res, next) => {
    // 4- find by id
    Professor.findById(req.params.professorId, (err, professor) => {
      if (err) throw err;
      res.json(professor);
    });
  })

  .put((req, res, next) => {
    // 5- implement post request to update a specific professor
    //This replaces everything about a professor, perhaps make it more specific in the future
    Professor.findByIdAndUpdate(
      req.params.professorId,
      { $set: req.body },
      { new: true },
      (err, professor) => {
        if (err) throw err;
        res.json(professor);
      }
    );
  })

  .delete((req, res, next) => {
    // 6- delete specific course in the collection
    Professor.findByIdAndRemove(req.params.professorId, (err, professor) => {
      if (err) throw err;
      res.json(professor);
    });
  });

professorRouter.route("/:professorId/courses").get((req, res, next) => {
  Professor.findById(req.params.professorId, (err, professor) => {
    if (err) throw err;
    //return the ids of all the courses the professor is in
    res.json(professor._coursesId);
  });
});

professorRouter
  .route("/:professorId/courses/:courseId")
  //add a new course id to the list of course ids a professor is in
  .put((req, res, next) => {
    Professor.findById(req.params.professorId, (err, professor) => {
      if (err) throw err;
      professor._coursesId.push(req.params.courseId);
      Professor.save((err, professor) => {
        if (err) throw err;
        console.log("Course Id added");
        res.json(professor);
      });
    });
  })

  //remove a specific course id from the list of ids
  .delete((req, res, next) => {
    Professor.findById(req.params.professorId, (err, professor) => {
      for (var i = Professor._coursesId.length - 1; i >= 0; i--) {
        if (Professor._coursesId[i] == req.params.courseId) {
          Professor._coursesId[i].remove(); //remove a single professor
        }
      }
      Professor.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
      });
    });
  });

module.exports = professorRouter;
