angular.module('FlashCards').directive('menuBar', function(){
  return {
    restrict: "EA",
    templateUrl: './js/directives/directive-templates/menu-bar.html',
    controller: function($scope, $rootScope, flashcard, $state, $http){

      $scope.getCategories = function(searchTerm){
         flashcard.getCategoriesBySearch(searchTerm)
         .then(function(results){
           $scope.categories = results;
         })
      }

      $scope.onFormSubmit = function(searchTerm){
        $state.go('browse', {searchTerm: searchTerm})
      }

      $scope.logout = function(){
        return $http({
          method: 'GET',
          url: '/logout'
        }).then(function(response){
          $rootScope.loggedIn = false;
          $state.go('landing');
        });
      };




    }
  }
});
