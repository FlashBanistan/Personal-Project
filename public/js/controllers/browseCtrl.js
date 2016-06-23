angular.module('FlashCards').controller('browseCtrl', function($scope, flashcard){
  $scope.name = "Aaron";

  $scope.getData = function(){
    $scope.data = flashcard.getData().then(function(response){
      console.log(response);
    })
  }


});
