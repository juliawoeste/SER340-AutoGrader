var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Admin Schema w/ three properties
var userSchema = new Schema({
    studentId : { 
            type : [String],
            required: false,
            unique : true
            },
    professorId : {
            type : [String],
            required : false,
            unique : true
    }
},
    { timestamps : true 

    });

// Export schema as a model
var User = mongoose.model('User', userSchema);

module.exports = User;
