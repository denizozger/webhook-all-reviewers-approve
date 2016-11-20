'use strict'

import Promise from 'bluebird'
import mongodb from 'mongodb'
import assert from 'assert'
import log from 'menna';

global.log = log

Promise.promisifyAll(mongodb);

const URI = process.env.MONGODB_URI

export async function getPR(id) {
  log.debug(`Retrieving pr id=${id}`)
  const db = await mongodb.MongoClient.connectAsync(URI)

  let pr = await db.collection('prs').findOne( { _id: id } )
  assert(pr)

  log.debug(`Retrieved pr ${pr.html_url} ${pr.state} [${getAssigneeNames(pr)}]`)
  await db.close()
  return pr
}

export async function createPR(pr) {
  log.debug(`Creating pr id=${pr.id}`)
  pr['_id'] = pr.id

  const db = await mongodb.MongoClient.connectAsync(URI)
  const prsCollection = db.collection('prs')

  const inserted = await prsCollection.insert(pr)
  assert(inserted.result.ok)
  log.debug(`Created pr ${pr.html_url} ${pr.state} [${getAssigneeNames(pr)}]`)

  await db.close()
  return pr
}

export async function updatePR(pr) {
  log.debug(`Updating pr id=${pr.id} with assignees=[${getAssigneeNames(pr)}]`)
  const db = await mongodb.MongoClient.connectAsync(URI)

  let result = await db.collection('prs').findAndModify(
    { id : pr.id },
    [],
    { $set:{ assignees:pr.assignees } },
    {new: true, upsert: true})
  assert(result.ok)
  
  log.debug(`Updated pr id=${pr.id} with assignees=[${getAssigneeNames(result.value)}]`)
  return pr
}

const getAssigneeNames = pr => `${pr.assignees.map(a => a.login)}`


// function bar() {
//   return 'bar';
// }

// export function test() {
//   return mongodb.MongoClient.connectAsync(URI)
//     .then(db => {
//       let prs = db.collection('prs')
//       return Promise.join(prs.insert(pr), prs)
//     })
//     .then(results => {
//       const [insert, prs] = results
//       assert(insert.result.ok);
//       return prs.find(pr)
//     })
//     .then(docs => docs.toArray())
//     .then(doc => {
//       console.dir(doc, {colors: true})
//       // return db.close.then(() => doc)
//       return doc
//     })
//     .catch(console.error)
// }

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