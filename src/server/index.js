const express = require('express');
const path = require('path');
const app = express();

// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.use('/api', (req, res) => {
	res.send('Welcome to the API root!');
});
app.use('/api/test', (req, res) => {
	res.send('This is a test.');
});

//Set the port that you want the server to run on
const port = process.env.PORT || 3001;
app.listen(port);
console.log('App is listening on port ' + port);