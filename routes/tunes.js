/*contains bits to render a tune using ajax*/

blog_model = require('./connection').blog_model;

exports.tune = function(req, res)
{
  blog_model.find({}, function(err, tunes) 
  {
    console.log('tunes: ' + tunes);
    res.render('templates/tune', {tunes: tunes});
  })  
}