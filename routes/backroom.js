var mongoose = require('./connection').mongoose;
var blog_model = require('./connection').blog_model;

/*
 * If the user has session data, retrieve their name
 * If not, redirect home.
 */
exports.userWelcome = function(req, res){
	if(!req.user)
	{
		console.log('no user');
		res.redirect('/');
	}
	else
	{
		res.render('backroom', { name: req.user.username });
	}
}

exports.postTune = function(req, res){
	
	console.log('post: ' + req);
	var post = req.body;
	
	var blog_post = new blog_model(
	{
		authorID   	: req.user._id,
		authorName  : req.user.username,
	    title     	: post.title,
	    summary		: limitTo200Chars(post.body),
	    body      	: post.body,
	    tags		: post.tags,
	    musicPlayerLink : post.link,
	    date      	: Date.now()
	});

	blog_post.save(function (err){
		if(err)
		{
			res.send('There was an error creating the user');
		}
		else
		{
			console.log('Success: ' + blog_post._id);
            res.redirect('/backroom');
		}
	});
}


/*
 * For long blog posts it we should view only a summary
 * on the home page. This function enables us to do that.
 */
function limitTo200Chars(text){
	var shortenedString = text.substring(0,200);
	return shortenedString;
}