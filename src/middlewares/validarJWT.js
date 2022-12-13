import {request, response} from 'express';
import jwt from 'jsonwebtoken';
import { ClientesModel } from '../models/clientes.js';

export const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    if(!token){
        return res.status(400).json({
            msg: "No hay token en la petición"
        });
    }
    
    try {
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
		const cliente = await ClientesModel.findByPk(uid);
        
		if (!cliente) {
			return res.status(400).json({
				msg: 'Cliente no existe, token inválido',
			});
		}
		next();
    } catch (error) {
        return res.status(401).json({
            msg: "Token caducado, loguee de nuevo"
        })
    }
}