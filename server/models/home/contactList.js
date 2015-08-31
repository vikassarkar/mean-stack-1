var mongoose = require('mongoose');

/*
**Create the Schema. 
*/
var schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	number: {
		type: String,
		required: true
	}
});

/*
**mongoose model schema. 
*/
var ContactList = mongoose.model('contactList', schema);

/*
**Export the model schema.
*/
module.exports = ContactList;
