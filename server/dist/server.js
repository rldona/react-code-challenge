'use strict';

var http = require('http');
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Api = require('./api');

function init() {

	var app = express();
	var routes = Api.routes();

	// Create server
	app.server = http.createServer(app);

	// Logger
	app.use(morgan('dev'));

	// 3rd party middleware
	app.use(cors({
		exposedHeaders: ["Link"]
	}));

	app.use(bodyParser.json({
		limit: "100kb"
	}));

	// Load REST API
	app.use('/', routes);

	app.server.listen(process.env.API_PORT, function () {
		console.log('Server on ' + process.env.API_HOST + ':' + process.env.API_PORT);
	});

	return app;
}

exports.init = init;
//# sourceMappingURL=server.js.map