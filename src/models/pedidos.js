import { DataTypes } from 'sequelize';
import { db } from '../database/connectionMysql.js';

export const PedidosModel = db.define('pedidos',{
    idPedido: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
    },
    idCliente: {
        type: DataTypes.BIGINT(20),
        defaultValue: 0,
    },
    noTanques:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    Latitud: {
        type: DataTypes.STRING,
    },
    Longitud: {
        type: DataTypes.STRING,
    },
    dateTime_init:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    dateTime_end:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    timestamps: false,
    freezeTableName: true,
});