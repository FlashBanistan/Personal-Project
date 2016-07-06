var FlashcardModel = require('../models/Flashcard.js');
var UserModel = require('../models/User.js');

module.exports = {

  createFlashcard: function(req, res){
    //console.log("inside create flashcard function");
    //console.log(req);
    var newFlashcard = new FlashcardModel(req.body.newCard);
    newFlashcard.save(function(err, result){
      if(err){
        console.log("Problem saving");
        return res.send(err);
      }
      else{
        //New flashcard id  result._id;
        console.log(req.body.setId);
        console.log(newFlashcard._id);
        UserModel.findOneAndUpdate({'sets._id':req.body.setId},{$push:{'sets.$.flashcards' : newFlashcard._id}}, function(err1, response){
          console.log(err1, response);
        })
      }
    })
    //User.findByIdAndUpdate
    //Set Id 577ac91b7a83b2cc34bda321
  },

  getFlashcardById: function(req, res){
    FlashcardModel.findById(req.params.id, function(err, response){
      if(err) return res.status(500).json(err);
      res.json(response);
    })
  },

  updateFlashcardById: function(req, res){
    FlashcardModel.findByIdAndUpdate(req.body.id, {$set: req.body}, function(err, result){
      if(err) return res.send(err);
      res.send(result);
    })
  },

  deleteFlashcardById: function(req, res){

  },



};
