import { Router } from 'express';
import {
	getDispositivosPorCliente,
	postAgregarDispositivo,
} from '../controllers/dispositivos.js';
import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validarJWT.js';

const router = Router();

router.get(
	'/idCliente/:idCliente',
	[validarJWT, validarCampos],
	getDispositivosPorCliente
);
router.post(
	'/nuevoDispositivo',
	[validarJWT, validarCampos],
	postAgregarDispositivo
);

export default router;
