var express = require('express');
var submissionsRouter = express.Router();
/** 1- declare mongoose and submissions **/
const mongoose = require('mongoose')
const submissions = require('../models/submissions')

submissionsRouter.route('/') 
.get((req,res,next)=>{ //chained into route(), no semi-colon after the all implementation
      // 2- implement get to return all submissions  
      submissions.find({},(err, submissions) => {
        if (err) throw err

        res.json(submissions)
     })
})

.post((req, res, next)=>{
	// 3- implement post request to insert a submissions into database
    submissions.create(req.body,(err, submissions) => {
        if (err) throw err;

        console.log("submission created")
        let id = submissions._id
        res.send("submission added with id " +id)
    })
})

submissionsRouter.route('/:submissionsId')
.get((req,res,next)=>{
    // 4- find by id 
    submissions.findById(req.params.submissionsId, (err, submissions) => {
          if (err) throw err;
          res.json(submissions)
      })
   })

.put((req, res, next)=>{
  // 5- implement post request to update a specific submissions
  //This replaces everything about a submissions, perhaps make it more specific in the future
  submissions.findByIdAndUpdate(req.params.submissionsId, 
      {$set:req.body}, 
      {new: true}, 
      (err, submissions) => {
          if (err) throw err;
          res.json(submissions)
      }
  );
})

.delete((req, res, next)=>{
    // 6- delete specific submission in the collection
    submissions.findByIdAndRemove(req.params.submissionsId,  (err, submissions)=>{        
              if (err) throw err;
              res.json(submissions);
      });
});

submissionsRouter.route('/:submissionsId/assignment')
.get((req, res, next)=>{
    submissions.findById(req.params.submissionsId,  (err, submissions)=>{
        if (err) throw err;
      //return the id of  the assignment the submission is for
        res.json(submissions._assignmentId)
    });
})

submissionsRouter.route('/:submissionsId/student')
.get((req, res, next)=>{
    submissions.findById(req.params.submissionsId,  (err, submissions)=>{
        if (err) throw err;
      //return the id of the student the submission is for
        res.json(submissions._studentId)
    });
})

module.exports = submissionsRouter;