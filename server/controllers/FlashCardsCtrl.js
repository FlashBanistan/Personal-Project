var FlashcardModel = require('../models/Flashcard.js');
var UserModel = require('../models/User.js');

module.exports = {

  createFlashcard: function(req, res){
    var newFlashcard = new FlashcardModel(req.body.newCard);
    newFlashcard.save(function(err, result){
      if(err){
        return res.send(err);
      }
      else{
        UserModel.findOneAndUpdate({'sets._id':req.body.setId},{$push:{'sets.$.flashcards' : newFlashcard._id}}).populate('sets.flashcards').exec(function(err1, response){
          return res.send(response);
        })
      }
    })
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
