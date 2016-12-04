'use strict'

import Promise from 'bluebird'
import mongodb from 'mongodb'
import assert from 'assert'
import log from 'menna';

global.log = log

Promise.promisifyAll(mongodb);

const URI = process.env.MONGODB_URI

export async function getPR(id) {
  log.info(`Retrieving pr id=${id}`)
  const db = await mongodb.MongoClient.connectAsync(URI)

  let pr = await db.collection('prs').findOne({ _id: id })
  assert(pr)

  log.info(`Retrieved pr ${pr.html_url} ${pr.state} [${getAssigneeSummary(pr)}]`)
  await db.close()
  return pr
}

export async function createPR(pr) {
  log.info(`Creating pr id=${pr.id}`)
  pr['_id'] = pr.id

  const db = await mongodb.MongoClient.connectAsync(URI)
  const prsCollection = db.collection('prs')

  const inserted = await prsCollection.insert(pr)
  assert(inserted.result.ok)
  log.info(`Created pr ${pr.html_url} ${pr.state} [${getAssigneeSummary(pr)}]`)

  await db.close()
  return pr
}

export async function updatePR(pr) {
  log.info(`Updating pr id=${pr.id} with assignees=[${getAssigneeSummary(pr)}]`)
  const db = await mongodb.MongoClient.connectAsync(URI)

  let result = await db.collection('prs').findAndModify(
    { id : pr.id },
    [],
    { $set:{ assignees:pr.assignees } },
    {new: true, upsert: true})
  assert(result.ok)
  
  log.info(`Updated pr id=${pr.id} with assignees=[${getAssigneeSummary(result.value)}]`)
  return pr
}

const getAssigneeSummary = pr => `${pr.assignees.map(a => `${a.login}:${a.reviewStatus}`)}`
