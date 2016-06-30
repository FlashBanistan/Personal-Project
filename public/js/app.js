angular.module('FlashCards', ['ui.router', 'ngAnimate']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('landing', {
    url: '',
    templateUrl: '../views/landing.html',
  })
  .state('login', {
    url: '/login',
    templateUrl: '../views/login.html',
    controller: 'loginCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: '../views/home.html',
  })
  .state('browse', {
    url: '/browse',
    templateUrl: '../views/browse.html',
    controller: 'browseCtrl'
  })
  .state('sets', {
    url: '/browse/sets/:nameId',
    resolve:{
      sets: ['flashcard', '$stateParams', function(flashcard, $stateParams){
        return flashcard.getCategoryById($stateParams.nameId);
      }]
    },
    templateUrl: '../views/sets.html',
    controller: 'setsCtrl',
  })
  .state('set', {
    url: '/browse/sets/set/:setId',
    resolve:{
      set: ['flashcard', '$stateParams', function(flashcard, $stateParams){
        return flashcard.getSetById($stateParams.setId);
      }]
    },
    templateUrl: '../views/set.html',
    controller: 'setCtrl',
  })
  $urlRouterProvider
            .otherwise('/');
})
