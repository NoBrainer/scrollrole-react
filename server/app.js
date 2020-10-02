const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

// Configure the Express app
const app = express();
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// API routes
app.use('/api', require('./api/index'));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err.message);
});

module.exports = app