var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imagesRouter = require('./routes/images');
var authRouter = require('./routes/auth');
var testRouter = require('./routes/test');
var jabberRouter = require('./routes/jabber');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Expose-Headers", "Link");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/assets', express.static('assets'))
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/test', testRouter);
app.use('/api/jabber', jabberRouter);


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


//connect to mongoose
const connectionString = process.env.CONNECTIONSTRING;
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(connectionString, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})



const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
console.log(`Server running at port ${port}`);
});



module.exports = app;
