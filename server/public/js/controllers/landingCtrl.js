angular.module('FlashCards').controller('landingCtrl', function($scope, $rootScope, $state, userService, loginService){



  $scope.signup = function(newUser){
    userService.signup(newUser).then(function(response){
      if(!response.data){
        alert('User does not exist');
      } else{
        var user = {};
        user.email = newUser.email;
        user.password = newUser.password;
        $scope.login(user);
      }
    }).catch(function(err){
      alert('Unable to login');
    });
  };

});
