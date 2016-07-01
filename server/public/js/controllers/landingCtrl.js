angular.module('FlashCards').controller('landingCtrl', function($scope, $state, userService, loginService){

  $scope.signup = function(newUser){
    console.log("in function");
    userService.signup(newUser).then(function(response){
      if(!response.data){
        alert('User does not exist');
      } else{
        $state.go('home');
      }
    }).catch(function(err){
      alert('Unable to login');
    });
  };

  $scope.login = function(user){
    loginService.login(user).then(function(response){
      console.log(response.data);
      $scope.userObj = response.data;
      if(!response.data){
        console.log('User does not exist');
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
