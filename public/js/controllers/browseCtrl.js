angular.module('FlashCards').controller('browseCtrl', function($scope, flashcard){
  $scope.name = "Aaron";

  $scope.getCategories = function(searchTerm){
     flashcard.getCategoriesBySearch(searchTerm).then(function(response){
      $scope.categories = response.data.data;
    })
  }

  $scope.getCategory = function(setId){
    flashcard.getCategoryById(setId).then(function(response){
      console.log(response.data.data);
      $scope.category = response.data.data;
    })
  }





});
