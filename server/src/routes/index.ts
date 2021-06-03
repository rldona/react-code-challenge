import { Router } from 'express';

import { phoneList } from '../db';

export default function routes() {
	const api: Router = Router();

	api.get('/phones', (req, res) => {
		res.json(
			phoneList
		);
	});

	return api;
}
