var mongoose = require('mongoose');

/*
**Create the Schema. 
*/
var schema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

/*
**mongoose model schema. 
*/
var Home = mongoose.model('home', schema);

/*
**Export the model schema.
*/
module.exports = Home;
