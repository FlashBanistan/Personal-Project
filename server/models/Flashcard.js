var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
