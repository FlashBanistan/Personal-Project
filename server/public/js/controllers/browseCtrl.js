angular.module('FlashCards').controller('browseCtrl', function($scope, flashcard){

  $scope.getCategories = function(searchTerm){
     flashcard.getCategoriesBySearch(searchTerm)
     .then(function(results){
       $scope.categories = results;
     })
  }







});
