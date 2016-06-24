angular.module('FlashCards').service('flashcard', function($http){

  this.getCategoriesBySearch = function(searchTerm){
    return $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/categories/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32&starts_with=" + searchTerm
    })
  };

  this.getCategoryById = function(setId){
    return $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/categories/" + setId + "/sets/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32"
    })
  };


});
//635869
//YMBXVufy7GkBKoVE34SAMAZJfPVapK32


//https://www.coursehero.com/api/flashcards/sets/
//https://www.coursehero.com/api/flashcards/categories?letter=&starts_with=spanish
//https://www.coursehero.com/api/flashcards/sets/




//https://www.coursehero.com/api/flashcards/categories?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32&starts_with=spanish
//https://www.coursehero.com/api/flashcards/categories/36/sets/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32
