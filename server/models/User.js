var mongoose = require('mongoose');
var flashcardSchema = require('./Flashcard.js')

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sets: [flashcardSchema]




});

module.exports = mongoose.model('User', userSchema);
