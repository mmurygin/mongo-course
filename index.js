#!/usr/bin/env node

'use strict';

const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 3000;

const server = http.createServer(app.callback());
server.listen(port);

server.on('error', err => {
    const wrappedError = wrapError(err);
    console.log(wrappedError);
});

server.on('listening', () => {
    console.log(`Listening on port ${port}`);
});

function wrapError(error) {
    if (error.syscall !== 'listen') {
        return error;
    }

    const bind = `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            return new Error(`${bind} requires elevated privileges`);
        case 'EADDRINUSE':
            return new Error(`${bind} is already in use`);
        default:
            return error;
    }
}
