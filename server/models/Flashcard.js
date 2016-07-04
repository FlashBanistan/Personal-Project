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




// Postman Code to create flashcard
// {
//     "term": "La Manzana",
//     "answer": "Apple",
//     "hint": "Starts with 'A'"
// }
