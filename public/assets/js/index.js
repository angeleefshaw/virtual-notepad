const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");

$(document).ready(function () {
  var newNote = {
    title: $(".note-title").val().trim(),
    text: $(".note-textarea")
  };

  //adds a note to the db
  $('.save-note').on('click', function(i) {
    $.ajax('/api/notes', {
      type:"POST",
      data: newNote
    }).then( function () {
      console.log("Added new note!");

      //reload page to see new notes
      location.replace("/");
  });
  })

  //getting all notes from the db 
  $.ajax ({
    url: "/api/notes",
    type: "GET"
  }).then(function(response) {
    console.log(response)
  })



// A function for deleting a note from the db


})


