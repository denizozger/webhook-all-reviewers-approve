'use strict';

// require('newrelic')

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _handlers = require('./handlers');

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();
server.connection({
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: handlers.homepage
});

server.route({
    method: 'POST',
    path: '/check-approvers',
    handler: handlers.checkApprovers
});

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});