import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../database/connectionMysql.js';
import { ClientesModel } from './clientes.js';

export const DispositivosModel = db.define(
	'dispositivos',
	{
		idDispositivo: {
			type: DataTypes.BIGINT(20),
			primaryKey: true,
			autoIncrement: true,
		},
		idCliente: {
			type: DataTypes.BIGINT(20),
		},
		idMac: {
			type: DataTypes.STRING(50),
		},
		Latitud: {
			type: DataTypes.DOUBLE,
		},
		Longitud: {
			type: DataTypes.DOUBLE,
		},
		ubicacion: {
			type: DataTypes.STRING(50),
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);


