var express = require('express');
var studentRouter = express.Router();
/** 1- declare mongoose and student **/
const mongoose = require('mongoose')
const student = require('../models/student')
const courses = require('../models/courses')

studentRouter.route('/') 
.get((req,res,next)=>{ //chained into route(), no semi-colon after the all implementation
      // 2- implement get to return all students  
      student.find({},(err, students) => {
        if (err) throw err

        res.json(students)
     })
})

.post((req, res, next)=>{
	// 3- implement post request to insert a student into database
    student.create(req.body,(err, student) => {
        if (err) throw err;

        console.log("Student created")
        let id = student._id
        res.send("Student added with id " +id)
    })
})

studentRouter.route('/:studentId')
.get((req,res,next)=>{
    // 4- find by id 
    student.findById(req.params.studentId, (err, student) => {
          if (err) throw err;
          res.json(student)
      })
   })

.put((req, res, next)=>{
  // 5- implement post request to update a specific student
  //This replaces everything about a student, perhaps make it more specific in the future
  student.findByIdAndUpdate(req.params.studentId, 
      {$set:req.body}, 
      {new: true}, 
      (err, student) => {
          if (err) throw err;
          res.json(student)
      }
  );
})

.delete((req, res, next)=>{
    // 6- delete specific student in the collection
    student.findByIdAndRemove(req.params.studentId,  (err, student)=>{        
              if (err) throw err;
              res.json(student);
      });
});

studentRouter.route('/:studentId/courses')
.get((req, res, next)=>{
    student.findById(req.params.studentId,  (err, student)=>{
        if (err) throw err;
      //return the ids of all the courses the student is in
        res.json(student._coursesId)
    });
})

studentRouter.route('/:studentId/courses/:courseId')
//add a new course id to the list of course ids a student is in
.put((req, res, next)=>{
    student.findById(req.params.studentId,  (err, student)=>{
        if (err) throw err;
        student._coursesId.push(req.params.courseId)
        student.save((err, student)=>{
            if (err) throw err;
            console.log("Course Id added")
            res.json(student)
        }) 
	});
    // courses.findById(req.params.courseId,  (err, course)=>{
    //     console.log('Run test')
    //     if (err) throw err;
    //     course._studentsId.push(req.params.studentId)
    //     course.save((err, course)=>{
    //         if (err) throw err;
    //         console.log("Student Id added")
    //         res.json(course)
    //     })
	// });
})

//remove a specific course id from the list of ids
.delete( (req, res, next)=>{
    student.findById(req.params.studentId,  (err, student)=>{
        for (var i = student._coursesId.length -1; i >= 0; i--) {
            if (student._coursesId[i] == req.params.courseId) {
                student._coursesId[i].remove() //remove a single course
            }
        }
        student.save( (err, resp)=>{
            if (err) throw err;
            res.json(resp);
        });
    });
});


module.exports = studentRouter;