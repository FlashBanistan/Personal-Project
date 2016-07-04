var FlashcardModel = require('../models/Flashcard.js');

module.exports = {
  createFlashcard: function(req, res){
    var newFlashcard = new FlashcardModel(req.body);
    newFlashcard.save(function(err, result){
      if(err) return res.send(err);
      else res.send(result);
    })
    //User.findByIdAndUpdate
  },

  getAllFlashcards: function(req, res){

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
