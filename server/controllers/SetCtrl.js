var UserModel = require('../models/User.js');


module.exports = {

  getSetWithSetId: function(req, res){
    UserModel.findOne({'sets._id': req.params.id})
    .lean().populate("sets.flashcards").exec(function(err, response){
      if(err) {
        return res.status(500).json(err);
      }
      else{
        // res.json(response);
        console.log(response);
        for(var i = 0; i < response.sets.length; i++){
          if(response.sets[i]._id == req.params.id){
            return res.json(response.sets[i]);
          }
        }
      }
    })
  }


};
