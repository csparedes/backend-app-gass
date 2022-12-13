import {Router} from 'express';
import { getLecturasPorDispositivo } from '../controllers/lecturas.js';
import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validarJWT.js';

const router = Router();

router.get(
	'/idDispositivo/:idDispositivo',
	[validarJWT, validarCampos],
	getLecturasPorDispositivo
);

export default router;