var express = require("express");
var path = require('path');
var app = express();

app.use('/css',  express.static('assets/css'));

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname + '/notes.html'))
})

app.get(`*`, function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})






//API routes
//app.get(`/api/notes`, function(req, res) {
  //read db.json using FS 
  //return all saved notes as JSON
//})



app.post(`/api/notes`, function(req, res) {
  var newNote = [];
  newNote.push(req.body)
  console.log(newNote)
  //store and retrieve notes to db.json using fs
})



//app.delete(`/api/notes/:id`, function(req, res) {
  //recieve query param with ID of note to delete
  //read all notes from db.json
  //remove the note with the ID given
  //rewrite notes to the db.JSON file
//})

// ROUTER
//require("/routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
