import { request, response } from 'express';

import { ClientesModel } from '../models/clientes.js';
import { DispositivosModel } from '../models/dispositivos.js';


ClientesModel.hasMany(DispositivosModel, { foreignKey: 'idCliente' });
DispositivosModel.belongsTo(ClientesModel, { foreignKey: 'idCliente' });

export const getDispositivosPorCliente = async (
	req = request,
	res = response
) => {
	const { idCliente } = req.params;
	const dispositivos = await DispositivosModel.sequelize.query(
		`
			SELECT
			D.idDispositivo,
			D.idCliente,
			D.idMAC,
			D.Latitud,
			D.Longitud,
			D.ubicacion,
			(SELECT MAX(L.TiempoCreacion) as fechaUltimaLectura FROM lecturas as L WHERE D.idDispositivo = L.idDispositivo) AS fechaUltimaLectura,
			(SELECT lectura FROM lecturas WHERE idDispositivo = D.idDispositivo AND TiempoCreacion = fechaUltimaLectura LIMIT 1) as lectura
			FROM
			dispositivos as D
			WHERE
			D.idCliente = ${idCliente}
		`
	);

	if (!dispositivos || dispositivos.length === 0) {
		return res.status(400).json({
			msg: 'El cliente no tiene dispositivos',
		});
	}

	
	
	res.json({
		msg: 'Dispositivos del cliente',
		dispositivos: dispositivos[0],
	});
};

export const postAgregarDispositivo = async (req = request, res = response) => {
	const { idCliente, idMac, Latitud, Longitud, ubicacion } = req.body;

	const nuevoDisp = DispositivosModel.build({
		idCliente,
		idMac,
		Latitud,
		Longitud,
		ubicacion,
	});

	await nuevoDisp.save();

	res.json({
		msg: 'Se ha agregado un dispositivo',
		dispositivo: nuevoDisp,
	});
};
