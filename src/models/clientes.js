import { DataTypes } from 'sequelize';
import { db } from '../database/connectionMysql.js'

export const ClientesModel = db.define(
	'clientes',
	{
		idCliente: {
			type: DataTypes.BIGINT(20),
			primaryKey: true,
			autoIncrement: true,
		},
		NoIdentificacion: { 
			type: DataTypes.STRING(10),
		},
		Nombres: {
			type: DataTypes.STRING(30),
		},
		Apellidos: {
			type: DataTypes.STRING(30),
		},
		Direccion: {
			type: DataTypes.STRING(100),
		},
		Telefono: {
			type: DataTypes.STRING(10),
		},
		idTelegram: {
			type: DataTypes.STRING(20),
		},
		email: {
			type: DataTypes.STRING(50),
		},
		clave: {
			type: DataTypes.STRING(100),
		},
		Perfil: {
			type: DataTypes.STRING(50),
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
