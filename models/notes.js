const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    note: {
        title: {
            type: String,
            required: "String is required."
        },
        text: {
            type: String,
            required: "String is required."
        }
        
    }
});


const AwsNote = mongoose.model("Note", NoteSchema);

module.exports = AwsNote;