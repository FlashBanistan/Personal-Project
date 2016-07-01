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


});
