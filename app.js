const express = require('express');
const server = express();
const path = require('path');
const {static} = require('express');

const port = process.env.PORT || 3010;
const start = () => console.log('Servidor corriendo el puerto 3010...');

server.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/home.html'))
    );

server.listen(port, start());

server.use(static(path.join(__dirname, '/public')));

