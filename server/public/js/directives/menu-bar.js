angular.module('FlashCards').directive('menuBar', function(){
  return {
    restrict: "EA",
    templateUrl: './js/directives/directive-templates/menu-bar.html',
    controller: function($scope, flashcard, $state){


      $scope.getCategories = function(searchTerm){
         flashcard.getCategoriesBySearch(searchTerm)
         .then(function(results){
           $scope.categories = results;
           console.log(results);

         })
      }

      $scope.onFormSubmit = function(searchTerm){
        console.log("Heyeyeyeyeyyeyeyey");
        $state.go('browse', {searchTerm: searchTerm})
      }









    }
  }
});
