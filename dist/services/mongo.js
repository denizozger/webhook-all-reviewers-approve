'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var foo = exports.foo = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var s;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bar();

          case 2:
            s = _context.sent;

            console.log(s);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function foo() {
    return _ref.apply(this, arguments);
  };
}();

exports.test = test;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_bluebird2.default.promisifyAll(_mongodb2.default);

var URI = process.env.MONGODB_URI;

var pr = { name: 'testpr' };

function bar() {
  return "bar";
}

function test() {
  return _mongodb2.default.MongoClient.connectAsync(URI).then(function (db) {
    var prs = db.collection('prs');
    return _bluebird2.default.join(prs.insert(pr), prs);
  }).then(function (results) {
    var _results = _slicedToArray(results, 2),
        insert = _results[0],
        prs = _results[1];

    (0, _assert2.default)(insert.result.ok);
    return prs.find(pr);
  }).then(function (docs) {
    return docs.toArray();
  }).then(function (doc) {
    console.dir(doc, { colors: true });
    // return db.close.then(() => doc)
    return doc;
  }).catch(console.error);
}

// mongodb.MongoClient.connect(URI, function(err, db) {
//   assert.equal(null, err);

//   const prs = db.collection('prs')

//   const pr = {name: 'testpr'}

//   prs.insert(pr, function(err, result) {
//     assert.equal(null, err);

//     prs.find(pr).toArray(function (err, docs) {
//       assert.equal(null, err);

//       docs.forEach(function (doc) {
//         console.dir(doc, {colors: true})
//       });

//       prs.drop(function (err) {
//         assert.equal(null, err);
//         db.close(function (err) {
//           assert.equal(null, err);
//         });
//       });
//     })    
//   })
// })