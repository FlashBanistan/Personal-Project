angular.module('FlashCards').controller('mySetCtrl', function($scope, $state, $stateParams, $window, flashcard, thisSet){
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
    else if($scope.currentFlashcard === $scope.flashcards.length) {
      $scope.currentIndex = 0;
      $scope.currentFlashcard = $scope.currentIndex+1;
      $scope.showTerm = false;
      $scope.showDefinition = false;
    }
    $scope.$apply();
  }
  $scope.previousCard = function(){
    if($scope.currentIndex>0){
      $scope.fob = "b";
      $scope.currentIndex--;
      $scope.currentFlashcard--;
      $scope.showTerm = false;
    }
    else if($scope.currentFlashcard === 1){
      $scope.currentIndex = $scope.flashcards.length-1;
      $scope.currentFlashcard = $scope.flashcards.length;
      $scope.showTerm = false;
      $scope.showDefinition = false;
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
    $scope.$apply();
  }

$window.onkeyup = function(event){
  if(event.keyCode === 39){
    $scope.nextCard();
  }
  else if(event.keyCode === 38){
    $scope.showAnswer();
  }
  else if(event.keyCode === 40){
    $scope.showAnswer();
  }
  else if(event.keyCode === 37){
    $scope.previousCard();
  }
  $scope.$apply()
}

  // Requests //
  $scope.addCardToSet = function(newCard){
    var setId = $scope.set._id;
    flashcard.addCardToSet(newCard, setId).then(function(response){
        $scope.newCard = {};
        $window.document.getElementById('mySet-inputTerm').focus();
        flashcard.getUserWithSetId(setId).then(function(response1){
          $scope.flashcards = response1.data.flashcards;
        })

    })
  }


  $scope.shuffle = function(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    $scope.flashcards = array;
    $scope.currentIndex = 0;
    $scope.currentFlashcard = $scope.currentIndex + 1;
    $scope.showTerm = false;
    $scope.showDefinition = false;
    return array;
  }

  $scope.fob = 'f';
  setInterval(function(){
    if(!$scope.autoplay) return;
    if($scope.fob === 'f' || $scope.fob === 'b'){
      $scope.showAnswer();
    }else {
      $scope.nextCard();
    }
  }, 3000)
})
