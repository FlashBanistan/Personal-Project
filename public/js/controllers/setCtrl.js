angular.module('FlashCards').controller('setCtrl', function($scope, flashcard, set){
  $scope.set = set;
  $scope.flashcards = set.flashcards;



});
