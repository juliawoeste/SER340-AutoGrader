var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Grade Schema w/ one property
var gradeSchema = new Schema({
    letterGrade : {
        type : String,
        required : false,
        unique : true
    },
    //Include Student Id
},
    { timestamps : true 
                
    });
    
// Assignment Schema w/ four properties
var assignmentSchema = new Schema({
    assignmentTitle : {
        type : String,
        required : true,
        unique : true
    }, 
    status : {
        type : Boolean,
        required : true,
        unique : true
    },
    dueDate : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
        unique : true
    },
    grades : [gradeSchema],
},
	{ timestamps : true 
			
	});

// Course Schema w/ one property
var courseSchema = new Schema({
    courseName : {
        type : String,
        required : true,
        unique : true
    },
    assignments : [assignmentSchema],
},
	{ timestamps : true 
			
	});




// Export schema as a model 
var Course = mongoose.model('Course', courseSchema);

module.exports = Course;