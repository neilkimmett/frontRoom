/*	connection.js
 *	Anything which talks to the outside goes here.
 *  Export variables at the bottom
 */

var mongoose = require('mongoose') //Requires mongoose
    , passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy
    , connectionString = require('./secrets').connectionString
    , clientID = require('./secrets').clientID
    , clientSecret = require('./secrets').clientSecret;

var dbconn = mongoose.connect(connectionString);	//connect to mongodb instance

/*Define all schemas here*/
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
	id 			: {type: ObjectId},
	username	: {type: String},
	password	: {type: String},
	email		: {type: String},
	fullName	: {type: String},
	dateCreated : {type: Date}
	});

var BlogPost = new Schema({
    authorID   	: {type: ObjectId},
    authorName  : {type: String},
    title     	: {type: String},
    summary     : {type: String},
    body      	: {type: String},
    tags		: {type: Array},
    musicPlayerLink : {type: String},
    date      	: {type: Date}
});

/*Passport things*/

/*
 * Define the facebook stragety
 * Curently logs into Augier's made up facebook App.
 */
passport.use(new FacebookStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('profile ' + profile);
    done(null, profile);
  }
));

/*
 * Serialises the user into the session
 */
passport.serializeUser(function(user, done) {
  console.log('serializing user:');
  done(null, user);
});

/*
 * Deserialises the user from their session
 */
passport.deserializeUser(function(obj, done) {
  console.log("User: " + obj);
    done(null, obj);
});

/*define all models here*/
var coll_model = mongoose.model('collaborator', User);
var blog_model = mongoose.model('tunes', BlogPost);

/*Export all variables required externally*/
exports.User = mongoose.model('collaborator', User);
exports.blog_model = blog_model;
exports.coll_model = coll_model;
exports.mongoose = mongoose;
exports.passport = passport;