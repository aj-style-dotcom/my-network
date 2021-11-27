var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./database/connection')
var cors = require('cors')



// all usables..
var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use("/uploads", express.static("uploads"))
app.use(cookieParser());


//landing routes   ..........

app.use("/pri", require('./routes/private'));
app.use("/pub", require("./routes/public"));




module.exports = app;
