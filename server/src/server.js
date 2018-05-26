'use strict';

const http       = require('http');
const express    = require('express');
const cors       = require('cors');
const morgan     = require('morgan');
const bodyParser = require('body-parser');

const Api        = require('./api');

function init() {

	const app    = express();
	const routes = Api.routes();

	// Create server
	app.server = http.createServer(app);

	// Logger
	app.use(morgan('dev'));

	// 3rd party middleware
	app.use(cors({
		exposedHeaders: ["Link"]
	}));

	app.use(bodyParser.json({
		limit : "100kb"
	}));

	// Load REST API
	app.use('/', routes);

	app.server.listen(process.env.API_PORT, () => {
		console.log(`Server on ${process.env.API_HOST}:${process.env.API_PORT}`);
	});

	return app;

}

exports.init = init;
