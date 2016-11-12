'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, reply) {
  console.dir(req.payload, { colors: true });
  return reply('Ok');
};