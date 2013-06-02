blog_model = require('./connection').blog_model;

/*
 * GET home page.
 */
exports.index = function(req, res)
{

  var rubric, headerUrl, logout, tunes;

  /*set up the header bar dependant on user*/
  if(req.user != null)
  {
    headerUrl='/backroom';
    rubric='T\' backRoom, ' + req.user.username;
    logout='logout';
  }
  else
  {
    headerUrl='/auth/facebook';
    rubric='login';
    logout='';
  }

  blog_model.find({}, function(err, tunes) 
  {
    console.log('tunes: ' + tunes);

    res.render('index', { title: 'frontRoom', 
                            headerUrl : headerUrl, 
                            rubric : rubric,
                            logout : logout,
                            tunes : tunes
                        });
  })
};

/*
exports.tune = function(req, res)
{
  blog_model.find({}, function(err, tunes) 
  {
    console.log('tunes: ' + tunes);
    var result = new EJS({url: 'templates/tune.ejs'}).render(tune);
    return result;
  })  
}*/

/*if(req.user != null)
  {
    url='/backroom';
    rubric='To the backroom, ' + req.user.fullName;
    logout='logout';
  }
  else
  {
    url='/login';
    rubric='login';
    logout='';
  }
  res.render('index', { title: 'frontRoom', 
                        url : url, 
                        rubric : rubric,
                        logout : logout});*/