var mongoose = require('mongoose');

/*
**Create the Schema. 
*/
var schema = mongoose.Schema({
	item: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	}
});

/*
**mongoose model schema. 
*/
var Component = mongoose.model('component', schema);

/*
**Export the model schema.
*/
module.exports = Component;
