import { Router } from 'express';
import { getCliente, getClientes } from '../controllers/clientes.js';

import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validarJWT.js';

const router = Router();

router.get('/', [validarJWT, validarCampos], getClientes);
router.get('/idCliente/:idCliente', [validarJWT, validarCampos], getCliente);

export default router;
