
var mongoose = require('./connection').mongoose;
var coll_model = require('./connection').coll_model;

/*
 * GET users listing.
 */

exports.list = function(req, res){
  //res.send("respond with a resource");
  res.render('user', { title: 'users' });
};

exports.addUser = function(req, res){
	var user = req.body;

	//var coll_model =  mongoose.model('collaborator', User);
	var collaborator = new coll_model(
	{
		username: user.username,
		password : user.password,
		email : user.email,
		fullName : user.fullName,
		dateCreated: Date.now
	});

	collaborator.save(function (err){
		if(err)
		{
			res.send('There was an error creating the user');
		}
		else
		{
			console.log('Success: ' + collaborator._id);
            res.send(collaborator._id);
		}
	});
}