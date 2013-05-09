
exports.userWelcome = function(req, res){
	res.render('internal_index', { name: req.fullName });
}