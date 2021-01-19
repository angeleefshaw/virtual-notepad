var express = require("express");
var path = require('path');
var app = express();
const fs = require("fs"); 

var PORT = process.env.PORT || 8080;
//made the public static and accessible instead of css
app.use('/public', express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use ejs as the defalt viewing engine
app.set('view engine', 'ejs')
// Requiring users file 
  
//HTML routes
app.get('/notes', function(req, res) {
  const notes = require("./db/db"); 
  //use render instead of sendFile to Pass Parameter
  res.render(path.join(__dirname + '/public/notes.ejs'), {notes : notes})
})


app.get(`*`, function(req, res) {
  res.render(path.join(__dirname + '/public/index.ejs'))
})






//API routes
//app.get(`/api/notes`, function(req, res) {
  //read db.json using FS 
  //return all saved notes as JSON
//})



app.post(`/api/notes`, function(req, res) {
  const notes = require("./db/db"); 
  // Defining new note from the body 
  let newNote = { 
      title: req.body.title, 
      text: req.body.text, 
  }; 
   
  // Adding new note to notes object 
  notes.push(newNote); 
    
  // Writing to a file 
  fs.writeFile(path.join(__dirname + '/db/db.json'), JSON.stringify(notes), err => { 
      
      // Checking for errors 
      if (err) throw err;  

      //after updating the json redirect to the notes page
      res.redirect('/notes/');
  }); 
})



//app.delete(`/api/notes/:id`, function(req, res) {
  //recieve query param with ID of note to delete
  //read all notes from db.json
  //remove the note with the ID given
  //rewrite notes to the db.JSON file
//})


//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
