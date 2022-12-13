import { request, response } from 'express';
import { DispositivosModel } from '../models/dispositivos.js';
import { LecturasModel } from '../models/lecturas.js';

DispositivosModel.hasMany(LecturasModel, { foreignKey: 'idDispositivo' });
LecturasModel.belongsTo(DispositivosModel, { foreignKey: 'idDispositivo' });

export const getLecturasPorDispositivo = async (
	req = request,
	res = response
) => {
	const { idDispositivo } = req.params;

	const lecturas = await LecturasModel.findAll({
		where: { idDispositivo },
		include: DispositivosModel,
	});

	if (!lecturas || lecturas.length === 0) {
		return res.status(400).json({
			msg: 'No hay lecturas del dispositivo',
		});
	}

	res.json({
		msg: 'Lecturas obtenidas',
		lecturas,
	});
};


