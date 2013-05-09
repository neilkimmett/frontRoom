var mongoose = require('./connection').mongoose;	//get the connected instance of mongoose
var coll_model = require('./connection').coll_model;

exports.loadLogin = function(req, res){
	res.render('login', { title: 'login' });
}

exports.userLogin = function(req, res){
	var user = req.body;

	//Find the users login details
	coll_model.find(
		{
			username : user.username, 
			password : user.password
		}, 
			function (err, user_details) 
			{
				if(err)
				{
					res.send('Either the username or password was incorrect');
				}
				else
				{
					console.log('Success: ' + user_details);
					
		            res.render('internal_index', { name : user_details[0].fullName});
				}
  
		});
}

