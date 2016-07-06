angular.module('FlashCards').controller('homeCtrl', function($scope, $state, loginService, userService){
//IIFE to pull the user data every time pages refreshes
  (function(){
    loginService.getCurrentUser().then(function(response){
      $scope.populatedUser = $scope.getPopulatedSet(response.data._id);
    });
  })();

  $scope.getPopulatedSet = function(userId){
    userService.getPopulatedUser(userId).then(function(response){
      $scope.name = response.data.name;
      $scope.sets = response.data.sets;
      $scope.email = response.data.email;
      $scope.id = response.data._id;
      return response;
    })
  };

  $scope.goToState = function(set){
    $state.go("mySet", {obj: set});
  }

  $scope.updateUsernamePassword = function(user, userId){
    var userId = $scope.id;
    userService.updateUser(user, userId).then(function(response){
    });
    };

  $scope.createNewSet = function(newSet, userId){
    var userId = $scope.id;
    userService.createSetOnUser(newSet, userId).then(function(response){
      alert("New set created");
    });
  };



});
