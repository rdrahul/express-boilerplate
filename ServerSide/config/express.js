"use strict";

console

const
    express = require('express'),
    config = require('./config'),
    glob = require('glob'),
    cors = require('cors'),
    path = require('path'),
    mongoose = require('mongoose');

module.exports = (app, io) => {
    app.use(cors());

    let db = mongoose.connection;
    db.on('error', () => {
        throw new Error("Unable to connect to database");
    });
    db.on('connection', () => {
        console.log("Connection to database successfull");
    });

	// Globbing through the routes
	let rootPath  = path.normalize( __dirname + '/..' );

    let routes = glob.sync(rootPath + '/routes/**/*.js');
    routes.forEach(route => { 
		console.log(route);
        require(route)(app, io);
    });

    // for unmatched routes
    app.use((req, res) => {
        res.status(404).send('route not found');
    });
}