import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const db = new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USERNAME,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: false,
	}
);

await db
	.authenticate()
	.then(() => console.log('MySQL Connected'))
	.catch((err) => console.log(err));

export {db};