angular.module('FlashCards').controller('mySetCtrl', function($scope, $state, $stateParams){
  console.log($stateParams.obj)

  $scope.currentIndex = 0;
  $scope.currentFlashcard = $scope.currentIndex+1;
  $scope.showTerm = true;
  $scope.showDefinition = false;
  $scope.set = $stateParams.obj;
  $scope.flashcards = $scope.set.flashcards;

  $scope.nextCard = function(){
    console.log($scope.flashcards.length);
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
