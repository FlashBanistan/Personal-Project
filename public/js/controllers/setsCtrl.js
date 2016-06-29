angular.module('FlashCards').controller('setsCtrl', function($scope, flashcard, sets){

  $scope.sets = sets;
  console.log($scope.sets)
});
