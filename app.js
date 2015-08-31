'use strict';
//REFERENCE BLOSSOMS, RESTANGULAR APPLICATIONS and many more

/*
**Get configuration file
*/
var config = require('./server/env/config');

/*
**configure database
*/
var db = require('./server/env/mongodb')(config);

/*
**Initilize the express application 
*/
var init = require('./server/env/init')(config);

/*
**configure the express application
*/
var app = require('./server/env/express')(config);

/*
**Start the app by listening on port
*/
app.listen(config.port, function() {
	console.log("Listining to Port 9000")
});

/*
**Expose app
*/
exports = module.exports = app;