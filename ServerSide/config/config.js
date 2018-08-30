const
	path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	database = require('./database'),
	env = process.env.NODE_ENV || 'development',
	_ = require('lodash');

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'expressboilerplate'
		},
		db: database.development,
		port: process.env.PORT || 8080

	},

	test: {
		root: rootPath,
		app: {
			name: 'expressboilerplate'
		},
		port: process.env.PORT || 8080
	},

	production: {
		root: rootPath,
		app: {
			name: 'expressboilerplate'
		},
		port: process.env.PORT || 8080

	}
};

module.exports = config[env];