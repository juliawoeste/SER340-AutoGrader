var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Course Schema w/ one property
var courseSchema = new Schema({
    courseName : {
        type : String,
        required : true,
        unique : true
    },
    _assignmentsId : {
        type : [String],
        required : false
    },
    _studentsId : {
        type : [String],
        required : false
    },
    _professorId : {
        type : String,
        required : true
    }
},
	{ timestamps : true 
			
	});

// Export schema as a model 
var Course = mongoose.model('Course', courseSchema);

module.exports = Course;