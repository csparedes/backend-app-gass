import { Router } from 'express';
import { getPedidos, getPedidosPorCliente, postNuevoPedido } from '../controllers/pedidos.js';
import { validarJWT } from '../middlewares/validarJWT.js';

const router = Router();

router.get('/', [
    validarJWT
], getPedidos);

router.get('/:idCliente',[
    validarJWT
], getPedidosPorCliente);

router.post ('/',[
    validarJWT
], postNuevoPedido);

export default router;