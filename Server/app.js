var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose")

var port = 9000;
var dbURI = "mongodb://localhost:27017/finstagram";
var corsConfig = {origin: ["http://localhost:4200"], optionsSuccessStatus:200}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsConfig));

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection;




app.listen(port,()=>console.log(`Server active on port number ${port}`));