angular.module('FlashCards').service('flashcard', function($http){

  this.getData = function(){
    return $http({
      method: "GET",
      url: "https://www.coursehero.com/api/flashcards/categories/?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32&starts_with=spanish"
    })
  };



});
//635869
//YMBXVufy7GkBKoVE34SAMAZJfPVapK32


//https://www.coursehero.com/api/flashcards/sets/
//https://www.coursehero.com/api/flashcards/categories?letter=&starts_with=spanish
//https://www.coursehero.com/api/flashcards/sets/




//https://www.coursehero.com/api/flashcards/categories?api_key=YMBXVufy7GkBKoVE34SAMAZJfPVapK32&starts_with=spanish
