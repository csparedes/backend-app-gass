import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../database/connectionMysql.js';
import { DispositivosModel } from './dispositivos.js';

export const LecturasModel = db.define('lecturas', {
	idLectura: {
		type: DataTypes.BIGINT(20),
		primaryKey: true,
		autoIncrement: true,
	},
	idDispositivo: {
		type: DataTypes.BIGINT(20),
		references: {
			model: DispositivosModel,
			key: 'idDispositivo',
            deferrable: Deferrable.INITIALLY_IMMEDIATE,
		},
	},
	lectura: {
		type: DataTypes.FLOAT,
	},
	tiempoCreacion: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
}, {
	timestamps: false,
	freezeTableName: true
});