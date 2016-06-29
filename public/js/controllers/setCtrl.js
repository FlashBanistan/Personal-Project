angular.module('FlashCards').controller('setCtrl', function($scope, flashcard, set){
  $scope.currentIndex = 0;
  $scope.set = set;
  $scope.flashcards = set.flashcards;

  $scope.nextCard = function(){
    $scope.fob = "f";
    $scope.currentIndex++;
  }
  $scope.previousCard = function(){
    if($scope.currentIndex>0){
      $scope.fob = "b";
      $scope.currentIndex--;
    }
  }



});
