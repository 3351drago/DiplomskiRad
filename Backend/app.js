var createError = require('http-errors');
var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

const URI = process.allowedNodeEnvironmentFlags.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017/diplomskidb";

mongoose.connect(URI,{
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("open", () => console.log("DB is connected"));
connection.on('error', (err) => {
  console.log(`Database error: ${err}`)
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var questionRouter = require('./routes/questions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function(){
  console.log("Running on" + port);
})

module.exports = app;
