'use strict'

import * as mongo from '../services/mongo.js';

export default async (req, reply) => {
  try {
    log.silly(JSON.stringify(req.headers), {colors: true})
    log.silly(JSON.stringify(req.payload), {colors: true})

    const event = req.headers['X-GitHub-Event']

    if (event !== 'pull_request') {
      return handleUnsupportedEvent() 
    }

    const pr = req.payload.pull_request

    if (event.action === 'opened') {
      await mongo.createPR(pr)
    } else if (event.action === 'assigned') {

    }

    // if (event === 'pull_request_review' && req.payload.state === 'approved') {
    let pr = await mongo.getPR(3)
    // }

    console.log(pr);
  } catch (err) {
    log.error(err)
    return null
  }

  return reply('Ok')
}

function handleUnsupportedEvent(event) {
  let msg = 'Unsupported event type: ' + event.action + event.number + 
    event.repository.full_name
  log.warn(msg);
  return reply(msg) 
}