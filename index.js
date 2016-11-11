'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: Number(process.env.PORT) || 8000 
});

server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
        return reply('/POST /check-approvers');
    }
});

server.route({
    method: 'POST',
    path:'/check-approvers', 
    handler: function (request, reply) {
        console.log(request.payload);
        return reply('hello world');
    }
});

// Start the server
server.start(err => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});