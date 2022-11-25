require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jsPDF = require("jspdf");
const path = require('path');
const session = require('express-session');
const logger = require('morgan');

const indexRouter = require('./routes/indexRoutes');
const loginRouter = require('./routes/LoginRoutes');
const compatibilidadeRouter = require('./routes/CompatibilidadeRoutes');
const userRouter = require('./routes/UserRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret:"ABC", resave: true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/user', loginRouter);
app.use('/compatibilidade', compatibilidadeRouter);
app.use('/usuario', userRouter);

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
module.exports = app;
