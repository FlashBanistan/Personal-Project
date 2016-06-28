var mongoose = require('mongoose');
var setSchema = require('./Set.js')

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
  sets: [setSchema],
  favorites: [{type: mongoose.Schema.ObjectId, ref: 'Flashcard'}]


});

module.exports = mongoose.model('User', userSchema);
