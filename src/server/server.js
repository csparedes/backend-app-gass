import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
// import {createServer} from 'https';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

import { routeUrl, serverRoute } from './urlPaths.js';

export class BackendServer {
    constructor(){
        dotenv.config();
        this.app = express();
        // const __filename = fileURLToPath(import.meta.url);
        // const __dirname = path.dirname(__filename);
        this.server = createServer(
            // {
            //     cert: fs.readFileSync(path.join(__dirname,'pucei_edu_ec.crt')),
            //     key: fs.readFileSync(path.join(__dirname, 'pucei_edu_ec.key')),
            //     ca: fs.readFileSync(path.join(__dirname, 'root_OV.crt'))
            // },
            this.app);
        this.port = process.env.PORT;
        
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(routeUrl.auth, serverRoute.auth);
        this.app.use(routeUrl.clientes, serverRoute.clientes);
        this.app.use(routeUrl.dispositivos, serverRoute.dispositivos);
        this.app.use(routeUrl.lecturas, serverRoute.lecturas);
        this.app.use(routeUrl.pedidos, serverRoute.pedidos);
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Server Up: ${this.port}`);
            
        })
    }
}