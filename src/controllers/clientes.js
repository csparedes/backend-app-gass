import { request, response } from 'express';
import { ClientesModel } from '../models/clientes.js';

export const getClientes = async (req = request, res = response) => {
	const clientes = await ClientesModel.findAll();
	if (!clientes || clientes.length === 0) {
		return res.status(400).json({
			msg: 'No se han encontrado clientes',
		});
	}
	res.json({
		msg: 'Lista de clientes',
		clientes,
	});
};
export const getCliente = async (req = request, res = response) => {
	const { idCliente } = req.params;
	const cliente = await ClientesModel.findByPk(idCliente);
	if (!cliente) {
		return res.status(400).json({
			msg: 'No se ha encontrado el cliente',
		});
	}
	res.json({
		msg: 'Cliente',
		cliente,
	});
};
