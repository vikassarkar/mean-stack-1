'use strict';

module.exports = {
	app: {
		title: 'mean-app-2',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 9000,
	//db: 'mongodb://localhost/mean-app-2'
	//db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean-app-2',
	db:'mongodb://vikas:sarkar@apollo.modulusmongo.net:27017/eg9ozIgu'
}