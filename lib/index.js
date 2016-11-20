'use strict';

// require('newrelic')

import Hapi from 'hapi'
import * as handlers from './handlers'

const server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: Number(process.env.PORT) || 8000 
});

server.route({
    method: 'GET',
    path:'/', 
    handler: handlers.homepage
});

server.route({
  method: 'POST',
  path:'/check-approvers', 
  handler: handlers.checkApprovers
});

server.start(err => {
    if (err) { throw err }
    console.log('Server running at:', server.info.uri)
});