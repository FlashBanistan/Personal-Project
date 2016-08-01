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
    UserModel.findById(req.params.id)
    .populate("sets.flashcards").exec(function(err, response){
      if(err) return res.status(500).json(err);
      res.json(response);
    })
  },

  me: function(req, res, next){
    if(!req.user) {
      return res.status(401).send("Current user not defined");
    }
    else{
      req.user.password = null;
      return res.status(200).json(req.user);
    }
  },
  updateUserById: function(req, res){
    console.log(req.user);
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err) return res.send(err);
      res.send(result);
    })
  },

  createSetOnUser: function(req, res){
    UserModel.findByIdAndUpdate(req.params.id, {$push: {sets: req.body}}, {new: true}, function(err, result){
      if(err) return res.send(err);
      else res.send(result);
    })
  },

};


// Postman to create a set on user
// {
//   "_id": "57787d43351fea401a552cad",
//   "email": "brucewayne@gmail.com",
//   "password": "$2a$10$rUs5hGYAqAsGP8xvDJMFaeMnYbO9JKEDCkdaLvb/Cj.gjAajnDl46",
//   "__v": 0,
//   "name": "Bruce Wayne",
//   "favorites": [],
//   "sets": [
//     {
//       "setDescription": "Most common spanish verbs",
//       "setName": "Spanish Verbs",
//       "_id": "577a812ab9e53f8e0f22265a",
//       "flashcards": []
//     },
//     {
//       "setDescription": "Simple list of common fruits in spanish",
//       "setName": "spanish fruit",
//       "_id": "577a812ab9e53f8e0f222659",
//       "flashcards": [
//         "5776ce1c3fa6f0cf45e5ef15",
//         "5776ce1c3fa6f0cf45e5ef15"
//       ]
//     }
//   ]
// }
