angular.module('FlashCards').controller('mySetCtrl', function($scope, $state, $stateParams, $window, flashcard, thisSet){
  $scope.currentIndex = 0;
  $scope.currentFlashcard = $scope.currentIndex+1;
  $scope.set = thisSet.data; console.log($scope.set)
  $scope.flashcards = thisSet.data.flashcards;
  console.log($scope.flashcards);
  $scope.p = false;
  $scope.fob = 'f';

  $scope.nextCard = function(){
    $scope.fob = "f";
    if($scope.currentFlashcard<$scope.flashcards.length){
      $scope.currentIndex++;
      $scope.currentFlashcard++;
    }
    else if($scope.currentFlashcard === $scope.flashcards.length) {
      $scope.currentIndex = 0;
      $scope.currentFlashcard = $scope.currentIndex+1;
    }
    if($scope.p === true){
      document.querySelector("#flip-container").classList.toggle("flip");
      $scope.p = false;
    }
    $scope.$apply();
  }
  $scope.previousCard = function(){
    $scope.fob = "b";
    if($scope.currentIndex>0){
      $scope.currentIndex--;
      $scope.currentFlashcard--;
    }
    else if($scope.currentFlashcard === 1){
      $scope.currentIndex = $scope.flashcards.length-1;
      $scope.currentFlashcard = $scope.flashcards.length;
    }
    if($scope.p === true){
      document.querySelector("#flip-container").classList.toggle("flip");
      $scope.p = false;
    }
  }
  $scope.showAnswer = function(){
    $scope.fob = "b";
    if($scope.p === true) $scope.p = false;
    else $scope.p = true;
    document.querySelector("#flip-container").classList.toggle("flip");
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
  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
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

  setInterval(function(){
    if(!$scope.autoplay) return;
    if($scope.fob === 'f'){
      $scope.showAnswer();
    }
    else{
      $scope.nextCard();
    }
  }, 4000)
})
