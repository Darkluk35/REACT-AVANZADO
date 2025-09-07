//Esta es la manera de hacer un servidor web con node.js vanilla
//import http from 'http';
//import fs from 'fs';

//const servidor = http.createServer((req,res) => {
//    const archivo = fs.createReadStream("./static/index.html")
//    archivo.pipe(res)
//    console.log("Hola mundo");
//})

//servidor.listen(3000);

//console.log('Servidor escuchando en el puerto 3000');

//------------Esta es la meanera de levantar un servidor web con Express--------------

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.get('/', (req, res) => {
    ressendFile('index.html', { 
        root: __dirname 
    });
})
app.listen(3000)
console.log('Servidor escuchando en el puerto 3000');

