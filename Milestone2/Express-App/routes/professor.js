var express = require('express');
var professorRouter = express.Router();
/** 1- declare mongoose and courses **/
const mongoose = require('mongoose')
const professor = require('../models/professor')

professorRouter.route('/') 
.get((req,res,next)=>{ //chained into route(), no semi-colon after the all implementation
      // 2- implement get to return all professors  
      professor.find({},(err, professors) => {
        if (err) throw err

        res.json(professors)
     })
})

.post((req, res, next)=>{
	// 3- implement post request to insert a professor into database
    professor.create(req.body,(err, professor) => {
        if (err) throw err;

        console.log("professor created")
        let id = professor._id
        res.send("professor added with id " +id)
    })
})

professorRouter.route('/:professorId')
.get((req,res,next)=>{
    // 4- find by id 
    professor.findById(req.params.professorId, (err, professor) => {
          if (err) throw err;
          res.json(professor)
      })
   })

.put((req, res, next)=>{
  // 5- implement post request to update a specific professor
  //This replaces everything about a professor, perhaps make it more specific in the future
  professor.findByIdAndUpdate(req.params.professorId, 
      {$set:req.body}, 
      {new: true}, 
      (err, professor) => {
          if (err) throw err;
          res.json(professor)
      }
  );
})

.delete((req, res, next)=>{
    // 6- delete specific course in the collection
    professor.findByIdAndRemove(req.params.professorId,  (err, professor)=>{        
              if (err) throw err;
              res.json(professor);
      });
});

professorRouter.route('/:professorId/courses')
.get((req, res, next)=>{
    professor.findById(req.params.professorId,  (err, professor)=>{
        if (err) throw err;
      //return the ids of all the courses the professor is in
        res.json(professor._coursesId)
    });
})

professorRouter.route('/:professorId/courses/:courseId')
//add a new course id to the list of course ids a professor is in
.put((req, res, next)=>{
    professor.findById(req.params.professorId,  (err, professor)=>{
        if (err) throw err;
        professor._coursesId.push(req.params.courseId)
        professor.save((err, professor)=>{
            if (err) throw err;
            console.log("Course Id added")
            res.json(professor)
        })
	});
})

//remove a specific course id from the list of ids
.delete( (req, res, next)=>{
    professor.findById(req.params.professorId,  (err, professor)=>{
        for (var i = professor._coursesId.length -1; i >= 0; i--) {
            if (professor._coursesId[i] == req.params.courseId) {
                professor._coursesId[i].remove() //remove a single professor
            }
        }
        professor.save( (err, resp)=>{
            if (err) throw err;
            res.json(resp);
        });
    });
});


module.exports = professorRouter;