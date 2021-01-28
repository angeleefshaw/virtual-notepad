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

  
//HTML routes
app.get('/notes', function(req, res) {
  const notes = require("./db/db"); 
  res.render(path.join(__dirname + '/public/notes.ejs'), {notes : notes})
})


app.get(`*`, function(req, res) {
  res.render(path.join(__dirname + '/public/index.ejs'))
})


app.post(`/api/notes`, function(req, res) {

  }; 

  notes.push(newNote); 
    
  // Writing to a file 
  fs.writeFile(path.join(__dirname + '/db/db.json'), JSON.stringify(notes), err => { 
      
      if (err) throw err;  

      res.redirect('/notes/');
  }); 
})



//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
