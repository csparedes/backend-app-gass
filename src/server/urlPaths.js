import auth from '../routes/auth.js';
import clientes from '../routes/clientes.js';
import dispositivos from '../routes/dispositivos.js';
import lecturas from '../routes/lecturas.js';

export const routeUrl = {
    auth: '/auth',
    clientes: '/clientes',
    dispositivos: '/dispositivos',
    lecturas: '/lecturas',
};


export const serverRoute = {
    auth,
    clientes,
    dispositivos,
    lecturas
};