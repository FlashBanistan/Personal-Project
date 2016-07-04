angular.module('FlashCards').service('userService', function($http){

  this.signup = function(newUser){
    return $http({
      method: 'POST',
      url: '/api/user',
      data: newUser
    }).then(function(response){
      return response;
    });
  };

  this.updateUser = function(user, userId){
    return $http({
      method: 'PUT',params: { obj: null},params: { obj: null},
      url: "/api/user/" + userId,
      data: user
    }).then(function(response){
      return response;
    });
  };

  this.createSetOnUser = function(newSet, userId){
    return $http({
      method: 'PUT',
      url: "/api/user/createNewSet/" + userId,
      data: newSet
    }).then(function(response){
      return response;
    });
  }

  this.getPopulatedUser = function(userId){
    return $http({
      method: 'GET',
      url: "/api/user/" + userId,
    }).then(function(response){
      return response;
    })
  }


});







// createOrderOnUser: function(req, res){
//     UserModel.findById(req.params.user_id)
//     .populate("cart.product")
//     .exec(function(err, resp){
//       var userObj = resp;
//       var userOrder = {};
//       userOrder.products = userObj.cart;
//       userOrder.user = req.params.user_id;
//       var newOrder = new OrderModel(userOrder);
//       UserModel.findByIdAndUpdate(resp._id, { $pull : {'cart': {} }});
//       newOrder.save(function(err1, result){
//         userObj.orders.push(mongoose.Types.ObjectId(newOrder._id));
//         userObj.save(function(err){});
//       });
//
//       UserModel.update({_id: userObj._id},
//         {$pull: {"cart": {}}},
//         {new: true}, function(err2, result2){
//           if(err){
//             res.sendStatus(500);
//           }else{
//           res.send(result2);
//           }
//         })
//       })
//   },
