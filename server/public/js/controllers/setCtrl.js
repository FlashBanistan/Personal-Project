angular.module('FlashCards').controller('setCtrl', function($scope, flashcard, set){
  $scope.currentIndex = 0;
  $scope.currentFlashcard = $scope.currentIndex+1;
  $scope.showTerm = true;
  $scope.showDefinition = false;
  $scope.set = set;
  $scope.flashcards = set.flashcards;
  console.log($scope.set);

  $scope.nextCard = function(){
    if($scope.currentFlashcard<$scope.flashcards.length){
      $scope.fob = "f";
      $scope.currentIndex++;
      $scope.currentFlashcard++;
      $scope.showTerm = false;
    }
  }
  $scope.previousCard = function(){
    if($scope.currentIndex>0){
      $scope.fob = "b";
      $scope.currentIndex--;
      $scope.currentFlashcard--;
      $scope.showTerm = false;
    }
  }
  $scope.showAnswer = function(){
    $scope.fob = 'u';
    if($scope.showTerm){
      $scope.showTerm = false;
    }
    else{
      $scope.showTerm = true;
    }
  }



});


  // $scope.showAnswer = function(){
  //   $scope.fob = 'u';
  //   if($scope.showTerm){
  //     $scope.showTerm = false;
  //   }
  //   else{
  //     $scope.showTerm = true;
  //   }
