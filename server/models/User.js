var mongoose = require('mongoose');
var setSchema = require('./Set.js')
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  sets: [setSchema],//$push, $pull for working with arrays
  favorites: [{type: mongoose.Schema.ObjectId, ref: 'Flashcard'}]
});

userSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

userSchema.methods.verifyPassword = function(reqBodyPassword){
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password)
};

module.exports = mongoose.model('User', userSchema);
