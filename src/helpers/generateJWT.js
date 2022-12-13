import jwt from 'jsonwebtoken';

export const generateJWT = (uid) => {
     return new Promise((resolve, reject) => {
			const payload = { uid };
			const key = process.env.JWT_SECRET;
			jwt.sign(
				payload,
				key,
				{
					expiresIn: '1d',
				},
				(err, token) => {
					if (err) {
						reject('No se pudo generar JWT');
					} else {
						resolve(token);
					}
				}
			);
		});
}