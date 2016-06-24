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
  .state('category', {
    url: '/browse/category',
    templateUrl: '../views/category.html',
    controller: 'browseCtrl'
  })
})
