//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
//Require controllers
var FlashCardsCtrl = require('./controllers/FlashCardsCtrl.js');
var UserCtrl = require('./controllers/UserCtrl.js');

//Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

//Create node server
var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ', port);
});

//Connect to mongo with ecommerce as name of db
mongoose.connect('mongodb://localhost/FlashCards');

//Flashcard endpoints
app.post('/api/flashcards', FlashCardsCtrl.createFlashcard);
app.get('/api/flashcards', FlashCardsCtrl.getAllFlashcards);
app.get('/api/flashcards/:id', FlashCardsCtrl.getFlashcardById);
app.put('/api/flashcards/:id', FlashCardsCtrl.updateFlashcardById);
app.delete('/api/flashcards/:id', FlashCardsCtrl.deleteFlashcardById);
//User endpoints
app.post('/api/user', UserCtrl.createNewUser);
app.get('/api/user/:id', UserCtrl.getUserById);
app.put('/api/user/id', UserCtrl.updateUserById);
