angular.module('FlashCards').controller('mySetCtrl', function($scope, $state, $stateParams, flashcard, thisSet){
  $scope.currentIndex = 0;
  $scope.currentFlashcard = $scope.currentIndex+1;
  $scope.showTerm = true;
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
      //console.log(response);
      for(var i = 0; i < response.data.sets.length; i++){
        if(response.data.sets[i]._id == setId){
          console.log(response.data.sets[i].flashcards);
          //$scope.flashcards = response.data.sets[i].flashcards;
        }
      }
    })
  }



  // this.getSetById = function(flashcardId){
  //   var deferred = $q.defer();
  //   $http({
  //     method: "GET",
  //     url: "https://www.coursehero.com/api/flashcards/sets/" + flashcardId + "/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32"
  //   }).then(function(response){
  //     deferred.resolve(response.data.data);
  //   })
  //   return deferred.promise;
  // };

});
