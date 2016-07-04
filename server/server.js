//Dependencies//
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('./services/passport');
var app = express();
//Controllers//
var FlashCardsCtrl = require('./controllers/FlashCardsCtrl.js');
var UserCtrl = require('./controllers/UserCtrl.js');
//Policies//
var isAuthed = function(req, res, next){
  if(!req.isAuthenticated()) return res.status(401).send();
  return next();
};
//Middleware//
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
  secret: "ifklsjfl;sdjiogjsdfsdoaidf",
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
//Passport Endpoints//
app.post('/login', passport.authenticate('local', {
   successRedirect: '/me',
   failureRedirect: '/'
}));
app.get('/logout', function(req, res, next){
  req.logout();
  console.log("logged out")
  return res.status(200).send('logged out');
});
//Flashcard endpoints
app.post('/api/flashcards', FlashCardsCtrl.createFlashcard);
app.get('/api/flashcards', FlashCardsCtrl.getAllFlashcards);
app.get('/api/flashcards/:id', FlashCardsCtrl.getFlashcardById);
app.put('/api/flashcards/:id', FlashCardsCtrl.updateFlashcardById);
app.delete('/api/flashcards/:id', FlashCardsCtrl.deleteFlashcardById);
//User endpoints
app.post('/api/user', UserCtrl.createNewUser);
app.get('/api/user/:id', UserCtrl.getUserById);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/api/user/:id', UserCtrl.updateUserById);
app.put('/api/user/createNewSet/:id', UserCtrl.createSetOnUser);
//Connect to mongo with FlashCards as name of db
mongoose.connect('mongodb://localhost/FlashCards');
//Create node server
var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ', port);
});
