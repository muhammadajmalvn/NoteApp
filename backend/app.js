var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");

var indexRouter = require('./routes/index');


const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

var app = express();
app.use(cors())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

mongoose.connect('mongodb://localhost:27017/NotesApp', { useNewUrlParser: true, useUnifiedTopology: true });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


const PORT = 5000
app.listen(PORT, console.log(`Port is running in http://localhost:${PORT}/`))

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
