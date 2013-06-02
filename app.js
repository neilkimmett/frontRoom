
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , routes = require('./routes')
  , tunes = require('./routes/tunes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , backroom = require('./routes/backroom')
  , express = require('express')
  , coll_model = require('./routes/connection').coll_model
  , passport = require('./routes/connection').passport
  , FacebookClient = require('facebook-client').FacebookClient;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);    //be listening on port 3000
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');    //using EJS as the view renderer
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'This is the godamn freakin secret!'}));  //should probably change this
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

exports.session = express.session;    //is this still needed?

/* Set up the URL endpoints */
app.get('/', routes.index);
app.get('/users', user.list);
app.post('/users', user.addUser);
app.get('/backroom', backroom.userWelcome);
app.post('/backroom', backroom.postTune);
app.get('/tunes', tunes.tunes);
app.post('/preview', tunes.preview);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


/*
 *Start the server on port specified above
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
