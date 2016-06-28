angular.module('FlashCards').service('flashcard', function($http, $q){


  this.getCategoriesBySearch = function(searchTerm){
    var deferred = $q.defer();
     $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/categories/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32&starts_with=" + searchTerm
    }).then(function(response){
      deferred.resolve(response.data.data);
    })
    return deferred.promise;
  };

  this.getCategoryById = function(setId){
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/categories/" + setId + "/sets/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32"
    }).then(function(response){
      deferred.resolve(response.data.data);
    })
    return deferred.promise;
  };

  this.getSetById = function(flashcardId){
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/sets/" + flashcardId + "/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32"
    }).then(function(response){
      deferred.resolve(response.data.data);
    })
    return deferred.promise;
  };



});
