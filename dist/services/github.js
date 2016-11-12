'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;

var _github = require('github');

var _github2 = _interopRequireDefault(_github);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var github = new _github2.default({
  Promise: _bluebird2.default
});

function test() {
  // return github.issues.get({ 
  //   owner: 'denizozger', 
  //   repo: 'g1ph1nat0r',
  //   number: '3'
  // }).then(function(res) {
  //     console.dir(res, { colors: true });
  // });
  return github.issues.getEvents({
    owner: 'denizozger',
    repo: 'g1ph1nat0r',
    issue_number: 3,
    per_page: 100
  }).then(function (res) {
    // console.dir(res, { colors: true });
    // console.log(res.map(event => {
    //   console.log(event);
    //   return {
    //     'username': event.actor.login,
    //     'event': event.event  
    //   }
    // }));
    console.log(res.map(function (event) {
      return event.event;
    }));
  });
}