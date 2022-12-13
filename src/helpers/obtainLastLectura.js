import { LecturasModel } from "../models/lecturas.js"


export const obtainLastLectura = async ( idDispositivo ) => {
    const lastLectura = await LecturasModel.sequelize.query(
		`
            SELECT 
            L.lectura, 
            MAX(L.TiempoCreacion) as fechaUltimaLectura
            FROM 
            lecturas as L,
            dispositivos as D
            WHERE L.idDispositivo = ${idDispositivo}
            AND D.idDispositivo = ${idDispositivo}
            AND L.TiempoCreacion = (SELECT MAX(L.TiempoCreacion) FROM lecturas)
        `
	);
    console.log('en el sql: '+lastLectura[0][0].lectura + '-'+ lastLectura[0][0].fechaUltimaLectura);
    
    return [
		lastLectura[0][0].lectura,
		lastLectura[0][0].fechaUltimaLectura,
	];    
    // return {
	// 	lectura: lastLectura[0][0].lectura,
	// 	fechaUltimaLectura: lastLectura[0][0].fechaUltimaLectura,
	// };    
}