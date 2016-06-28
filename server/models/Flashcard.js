var mongoose = require('mongoose');

var flashcardSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
  }

});

module.exports = mongoose.model('Flashcard', flashcardSchema);
