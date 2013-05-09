/*	connection.js
 *	Initialises and stores all session data to talk to mongodb database
 *  Makes the externally needed variables accessable
 */

var mongoose = require('mongoose'); //Requires mongoose
var dbconn = mongoose.connect('mongodb://administrator:frontRoomYall@dharma.mongohq.com:10063/frontRoom');	//connect to mongodb instance

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

/*define all models here*/
var coll_model = mongoose.model('collaborator', User);


/*Export all variables required externally*/
exports.coll_model = coll_model;
exports.mongoose = mongoose;