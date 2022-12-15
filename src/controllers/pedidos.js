import { request, response } from 'express';
import { PedidosModel } from '../models/pedidos.js';


export const getPedidos = async (req = request, res = response) => {
    const pedidos = await PedidosModel.findAll();

    if (!pedidos || pedidos.length === 0) {
        return res.status(400).json({
            msg: "No hay pedidos"
        })
    }

    res.json({
        msg: "Lista de pedidos",
        pedidos
    })
}

export const getPedidosPorCliente = async (req = request, res = response) => {
    const { idCliente } = req.params;
    const pedidos = await PedidosModel.findAll({ where: { idCliente } });

    if (!pedidos || pedidos.length === 0) {
        return res.status(400).json({
            msg: "No hay pedidos"
        })
    }

    res.json({
        msg: "Lista de pedidos por cliente",
        pedidos
    })
}

export const postNuevoPedido = async (req = request, res = response) => {
    const {
        idCliente,
        noTanques,
        Latitud,
        Longitud,
        dateTime_init,
        dateTime_end,
    } = req.body;

    const nuevoPedido = new PedidosModel({
        idCliente,
        noTanques,
        Latitud,
        Longitud,
        dateTime_init,
        dateTime_end,
    });
    await nuevoPedido.save();

    res.json({
        msg: "Nuevo pedido creado",
        pedido: nuevoPedido
    })
}
