
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , login = require('./routes/login')
  , internal_index = require('./routes/internal_index');

var app = express();

//connect to mongodb instance
//var dbconn = mongoose.connect('mongodb://administrator:frontRoomYall@dharma.mongohq.com:10063/frontRoom');
//module.exports.mongoose = mongoose;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/users', user.addUser);
app.get('/login', login.loadLogin);
app.post('/login', login.userLogin);
app.get('/internal_index', internal_index.userWelcome);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



/*Schemas*/

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author    	: {type: ObjectId},
    title     	: {type: String},
    body      	: {type: String},
    tags		: {type: String},
    musicPlayerLink : {type: String},
    date      	: {type: Date}
});