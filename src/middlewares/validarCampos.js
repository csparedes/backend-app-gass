import {request, response} from 'express';

import { validationResult } from 'express-validator';

export const validarCampos = async (req = request, res = response, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(401).json({
            msg: "Datos incorrectos",
            errors: errors.mapped()
        });
    }

    next();
}