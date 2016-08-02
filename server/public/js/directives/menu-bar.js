angular.module('FlashCards').directive('menuBar', function(){
  return {
    restrict: "EA",
    templateUrl: './js/directives/directive-templates/menu-bar.html',
    controller: function($scope, $rootScope, flashcard, $state, $http, loginService){
      $rootScope.loggedIn = true;
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

      $scope.login = function(user){
        loginService.login(user).then(function(response){
          if(!response.data){
            alert('User does not exist');
            $scope.user.password = '';
          } else{
            $rootScope.loggedIn = true;
            $state.go('home');
          }
        }).catch(function(err){
          alert('Unable to login');
        });
      };




    }
  }
});
