'use strict';

var Router = require('express');
var MockedDatabase = require('../db/phones-mock');

function routes() {

	var api = Router();

	/**
  * GET: Returns a couple of mobile phones
  */
	api.get('/phones', function (req, res) {
		res.json(MockedDatabase.getPhoneList());
	});

	return api;
}

exports.routes = routes;
//# sourceMappingURL=index.js.map