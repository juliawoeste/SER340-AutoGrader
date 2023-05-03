//Made By: Rion-Mark McLaren Jr

var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var courses = require("./routes/courses");
var student = require("./routes/student");
var professor = require("./routes/professor");
var assignments = require("./routes/assignments");
var submissions = require("./routes/submissions");
var cors = require("cors");
/**
 * Create a connection to mongoDB using mongoose
 */
var mongoose = require("mongoose");
// Connection URL
//Rion's Test Database Link: mongodb+srv://ser340:A3156FKcmRylIpOT@cluster0.iv5w7tz.mongodb.net/?retryWrites=true&w=majority
//var url =
//("mongodb+srv://ser340:A3156FKcmRylIpOT@cluster0.iv5w7tz.mongodb.net/?retryWrites=true&w=majority");
var url =
  "mongodb+srv://hhanif:ser341@cluster0.wyu4ij4.mongodb.net/?retryWrites=true&w=majority";

// Connect using mongoose
mongoose.connect(url, { useNewUrlParser: true });
//open a connection and get a db handler
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/courses", courses);
app.use("/student", student);
app.use("/professor", professor);
app.use("/assignments", assignments);
app.use("/submissions", submissions);
//add professor and student routes here

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
