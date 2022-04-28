const express = require('express');
const path = require('path');
const { Socket } = require('socket.io');
require('dotenv').config();

//App de express
const app = express();

//NOde server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')


//Path publico
const publiPath = path.resolve( __dirname, 'public' );
app.use(express.static(publiPath))



server.listen (process.env.PORT, (err) =>{
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto`, process.env.PORT);
});