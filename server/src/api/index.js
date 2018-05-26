'use strict';

const Router         = require('express');
const MockedDatabase = require('../db/phones-mock');

function routes() {

	const api = Router();

	/**
	 * GET: Returns a couple of mobile phones
	 */
	api.get('/phones', (req, res) => {
		res.json(
			MockedDatabase.getPhoneList()
		);
	});

	return api;

}

exports.routes = routes;
