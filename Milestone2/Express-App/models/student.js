var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Student Schema w/ three properties
var studentSchema = new Schema({
	name : { 
			type : String,
			required: true,
			unique : true
			},
	email : {
			type : String,
			required : true
	},
    password : {
        type : String,
        required : true,
        unique : true
    },
	_coursesId: {
		type : [String],
		required : false,
	}
},
	{ timestamps : true 
			
	});

// Export schema as a model
var Student = mongoose.model('Student', studentSchema);

module.exports = Student;