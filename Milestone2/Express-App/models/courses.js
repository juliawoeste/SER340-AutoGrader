var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId
// Course Schema w/ one property
var courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    _assignmentsId: [{
      type: ObjectId,
      ref: 'assignments',
      required: false,
    }],
    _studentsId: {
      type: [String],
      required: false,
    },
    _professorId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export schema as a model
var Course = mongoose.model("Course", courseSchema);

module.exports = Course;
