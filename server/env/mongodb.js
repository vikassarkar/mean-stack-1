'use strict';

var mongoose = require('mongoose');

module.exports = function(config) {

	mongoose.connect(config.db);
	var db = mongoose.connection;

	db.on('error', function(msg) {
		console.log('Mongoose connection error %s', msg);
	});

	db.once('open', function() {
		console.log('Mongoose connection established in - '+ config.db);
	});
}