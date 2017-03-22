var express = require("express");

var bodyParser = require("body-parser");

var movies = require("./routes/movies");

var mongoose = require('mongoose');

var app = express();

var dbName = 'moviedbfinal';

var connectionString = "mongodb://localhost:27017/" + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use('/api', movies);

module.exports = app;