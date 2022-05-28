const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const imgModel = require('./models/imageModel')
const ejs = require('ejs')
//const cors = require('cors')
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS1, () => console.log("Database1 connected"));
//mongoose.connect(process.env.DATABASE_ACCESS2, () => console.log("Database2 connected"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
// Set EJS as templating engine 
app.set("view engine", "ejs");
// ejs.delimiter = '/';
// ejs.openDelimiter = '[';
// ejs.closeDelimiter = ']';

app.use(express.json())
//app.use(cors)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(path.join(__dirname, '/drawing_app')));
// app.use(express.static('drawing_app'));
app.use('',routes)

app.listen(5000, () => console.log("server running"))