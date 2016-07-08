angular.module('FlashCards').controller('mySetCtrl', function($scope, $state, $stateParams, flashcard, thisSet){
  $scope.currentIndex = 0;
  $scope.currentFlashcard = $scope.currentIndex+1;
  $scope.showTerm = false;
  $scope.showDefinition = false;
  $scope.set = thisSet.data;
  $scope.flashcards = thisSet.data.flashcards;

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


  // Requests //

  $scope.addCardToSet = function(newCard){
    var setId = $scope.set._id;
    flashcard.addCardToSet(newCard, setId).then(function(response){
        flashcard.getUserWithSetId(setId).then(function(response1){
          $scope.flashcards = response1.data.flashcards;
        })

    })
  }

});
