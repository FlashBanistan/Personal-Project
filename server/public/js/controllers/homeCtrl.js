angular.module('FlashCards').controller('homeCtrl', function($scope, $window, $state, loginService, userService){
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

  $scope.updateUsernameEmail = function(user, userId){
    var userId = $scope.id;
    if(user.name) $scope.name = user.name;
    if(user.email) $scope.email = user.email;
    userService.updateUser(user, userId).then(function(response){
    });
    };

  $scope.createNewSet = function(newSet, userId){
    var userId = $scope.id;
    $scope.sets.push(newSet);
    userService.createSetOnUser(newSet, userId).then(function(response){
      $scope.newSet = {};
      $window.document.getElementById('home-newSetNameInput').focus();
    });
  };



});
