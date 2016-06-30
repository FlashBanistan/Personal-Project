angular.module('FlashCards').controller('loginCtrl', function($scope, loginService, $state){

  $scope.login = function(user){
    loginService.login(user).then(function(response){
      if(!response.data){
        alert('User does not exist');
        $scope.user.password = '';
      } else{
        $state.go('home');
      }
    }).catch(function(err){
      alert('Unable to login');
    });
  };

});
