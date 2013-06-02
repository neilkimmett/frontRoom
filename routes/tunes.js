/*contains bits to render a tune using ajax*/

blog_model = require('./connection').blog_model;

exports.tunes = function(req, res)
{
  blog_model.find({}, function(err, tunes) 
  {
    console.log('tunes: ' + tunes);
    res.render('templates/multipletunes', {tunes: tunes});
  })  
}

exports.preview = function(req, res)
{
	var tunes = new Array();
	tunes[0] = req.body.tunes;

	console.log('tunes.length: ' + tunes.length);
	res.render('templates/multipletunes', {tunes: tunes});
}
