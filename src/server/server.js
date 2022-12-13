import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

import { routeUrl, serverRoute } from './urlPaths.js';

export class BackendServer {
    constructor(){
        dotenv.config();
        this.app = express();
        this.server = createServer(this.app);
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
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Server Up: ${this.port}`);
            
        })
    }
}