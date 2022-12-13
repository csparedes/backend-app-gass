import { request, response } from 'express';
import bcrypt from 'bcrypt';

import { ClientesModel } from '../models/clientes.js';
import { generateJWT } from '../helpers/generateJWT.js';

export const postLogin = async (req = request, res = response) => {
	const { email, clave } = req.body;

	const userFinded = await ClientesModel.findOne({ where: { email } });

	if (!userFinded) {
		return res.status(400).json({
			msg: 'No existe el usuario',
		});
	}

	const isPassOk = bcrypt.compareSync(clave, userFinded.clave);
	if (!isPassOk) {
		return res.status(400).json({
			msg: 'Clave incorrecta',
		});
	}

	return res.json({
		msg: 'Login Ok',
		user: userFinded,
		token: await generateJWT(userFinded.idCliente),
	});
};

export const postRegister = async (req = request, res = response) => {
	const {
		NoIdentificacion,
		Nombres,
		Apellidos,
		Direccion,
		Telefono,
		email,
		clave,
		Perfil,
	} = req.body;

	const userExist = await ClientesModel.findOne({ where: { email } });
	if (userExist) {
		return res.status(400).json({
			msg: 'El usuario ya existe, ya tiene su cuenta',
		});
	}

	const newUser = ClientesModel.build({
		NoIdentificacion,
		Nombres,
		Apellidos,
		Direccion,
		Telefono,
		email,
		clave: bcrypt.hashSync(clave, bcrypt.genSaltSync()),
		Perfil,
	});
	await newUser.save();

	res.json({
		msg: 'Usuario creado',
		user: newUser,
	});
};

export const postChangePassword = async (req = request, res = response) => {
	const { email, clave } = req.body;

	const updateUser = await ClientesModel.update(
		{ clave: bcrypt.hashSync(clave, bcrypt.genSaltSync()) },
		{ where: { email } }
	);
	if (!updateUser) {
		return res.status(400).json({
			msg: `No se encontró el usuario con el correo: ${email}`,
		});
	}

	res.json({
		msg: 'Se ha cambiado la clave del usuario',
		user: await ClientesModel.findOne({ where: { email } }),
	});
};
