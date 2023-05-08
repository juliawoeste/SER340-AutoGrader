var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

// Student Schema w/ three properties
var studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    _coursesId: {
      type: [String],
      required: false,
    },
    admin: {
      //true or false for admin
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export schema as a model
//var Student = mongoose.model("Student", studentSchema);
studentSchema.plugin(passportLocalMongoose); //adds the user hash and salt fileds to store the user name, the hashed password and salted value

module.exports = mongoose.model("Student", studentSchema);
