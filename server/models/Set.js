var mongoose = require('mongoose');
var flashcardSchema = require('./Flashcard.js')

module.exports = new mongoose.Schema({
  setName: {
    type: String,
    required: true,
  },
  setDescription: {
    type: String,
  },
  flashcards: [{type: mongoose.Schema.ObjectId, ref: 'Flashcard'}]
});
