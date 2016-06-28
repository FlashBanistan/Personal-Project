var UserModel = require('../models/User.js');

module.exports = {

  createNewUser: function(req, res){
    var newUser = new UserModel(req.body);
    newUser.save(function(err, result){
      if(err) return res.send(err);
      else res.send(result);
    })
  },

  getUserById: function(req, res){
    UserModel.findById(req.params.id, function(err, response){
      if(err) return res.status(500).json(err);
      res.json(response);
    })
  },

  updateUserById: function(req, res){
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err) return res.send(err);
      res.send(result);
    })
  },

};



// Example input for createNewUser
//http://127.0.0.1:3000/api/user/5772c373fc13cc943aed38e3
// {
//     "name": "Aaron",
//     "email": "FlashBanistan66@gmail.com",
//     "password": "password"
// }

// Example url input for getUserById
// http://127.0.0.1:3000/api/user/5772c373fc13cc943aed38e3

//
//http://127.0.0.1:3000/api/user/5772c373fc13cc943aed38e3
