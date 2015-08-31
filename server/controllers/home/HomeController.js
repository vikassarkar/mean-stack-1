'use strict';

module.exports = function(app, route) {

	var homeSchema = app.models.home;

	app.get('/home', function(req, res) {
		res.send('respond with a home data');
	});

	app.get('/home/:id', function(req, res) {
		var id = req.params.id;
		res.send('respond with a home data with id - '+ id);
	});

	/*
	**Return middleware.
	*/
	return function(req, res, next) {
		next();
	};
}
