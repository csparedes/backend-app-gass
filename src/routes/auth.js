import { Router } from 'express';
import { check } from 'express-validator';
import {
	postChangePassword,
	postLogin,
	postRegister,
} from '../controllers/auth.js';
const router = Router();

router.post(
	'/login',
	[
		check('email', 'El correo es necesario').notEmpty(),
		check('clave', 'La clave es necesaria').notEmpty(),
	],
	postLogin
);
router.post('/register', [], postRegister);
router.post(
	'/changePassword',
	[
		check('email', 'El correo es necesario').notEmpty(),
		check('clave', 'La clave es necesaria').notEmpty(),
	],
	postChangePassword
);

export default router;
