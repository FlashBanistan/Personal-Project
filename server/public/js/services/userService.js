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
