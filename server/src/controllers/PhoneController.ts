import { Request, Response} from 'express'

import { phoneList } from '../db'

class PhoneController {
  phones(_req: Request, res: Response) {
		res.json(
			phoneList
		);
	}
}

const phoneController = new PhoneController()

export default phoneController