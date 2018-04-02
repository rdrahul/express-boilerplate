const
	path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	//social = require('./social'),
	//mailer = require('./mailer'),
	//razorpay = require('./razorpay'),
	database = require('./database'),
	env = process.env.NODE_ENV || 'development',
	_ = require('lodash');

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'loande'
		},
		db: database.development,
		port: process.env.PORT || 8080,
		//social: social,
		//sessionSecret: 'secret',
		//sessionCollection: 'sessions',
		//mailer: mailer.development,
		redis_port: '127.0.0.1',
		redis_host: 6379
		//razorpay: razorpay
	},

	test: {
		root: rootPath,
		app: {
			name: 'loande'
		},
		port: process.env.PORT || 8080,
		db: database.test,
		// social: social,
		// mailer: mailer,
		redis_port: '127.0.0.1',
		redis_host: 16379
		//razorpay: razorpay
	},

	production: {
		root: rootPath,
		app: {
			name: 'loande'
		},
		port: process.env.PORT || 8080,
		// db: database.production,
		// social: social,
		// mailer: mailer.production,
		redis_port: '127.0.0.1',
		redis_host: 16379
	}
};

module.exports = config[env];