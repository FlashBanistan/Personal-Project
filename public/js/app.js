angular.module('FlashCards', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '',
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
})
