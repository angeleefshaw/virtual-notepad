var express = require('express');
var path = require('path');
const logger = require("morgan");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(logger("dev"));

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/notesdb", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
  }
);

 
//HTML routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/notes', function(req, res) {
  
  res.sendFile(path.join(__dirname + '/public/notes.html'));
})


//api routes
app.get('/api/notes', function(req, res) {
  db.AwsNote.find({})
  .then(dbNote => {
    console.log(dbNote)
    // res.json(dbNote)
  })
})

app.post('/api/notes', function(req, res) {
  console.log(req.body);
}) 

app.delete('/api/notes/:id', function (req, res) {
  console.log(req.params)
})

 


//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
