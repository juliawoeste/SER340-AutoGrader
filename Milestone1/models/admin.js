var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Admin Schema w/ three properties
var adminSchema = new Schema({
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
var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;