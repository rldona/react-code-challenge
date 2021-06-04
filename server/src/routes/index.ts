import { Router } from 'express';

import phoneController from '../controllers/PhoneController'

export default function routes() {
	const api: Router = Router()

	api.get('/phones', phoneController.phones)

	return api
}
