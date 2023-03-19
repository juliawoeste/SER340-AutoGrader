var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Professor Schema w/ three properties
var professorSchema = new Schema({
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
    }
},
	{ timestamps : true 
			
	});

// Export schema as a model 
var Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;