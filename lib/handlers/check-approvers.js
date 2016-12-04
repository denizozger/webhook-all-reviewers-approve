'use strict'

import _ from 'lodash'
import * as mongo from '../services/mongo.js'
import * as github from '../services/github.js'

export default async (req, reply) => {
  try {
    log.silly(JSON.stringify(req.headers), {colors: true})
    log.silly(JSON.stringify(req.payload), {colors: true})

    const eventType = req.headers['x-github-event']
    // if (!_.includes(['pull_request', 'pull_request_review'], eventType)) {
    //   return handleUnsupportedEvent(reply, eventType) 
    // }

    const event = req.payload
    const pr = event.pull_request
    pr.id = 93436226
    log.info(`PR ${event.action}: ${pr.url}`);

    if (event.action === 'opened') {
      await mongo.createPR(pr)
      log.info(`Sender: ${event.sender.login}`);
      log.info(`Assignees: ${pr.assignees.map(a => a.login)}`);

      const noAssignees = !pr.assignees
      const ownerAndAssigneeAreTheSame = 
        pr.assignees.length === 1 && pr.assignee.login === event.sender.login

      if (noAssignees || ownerAndAssigneeAreTheSame) {
        log.info('PR has either no assignees or owner and assignee are the same');
        reply('PR has either no assignees or owner and assignee are the same')
      } else {
        log.info('Waiting for approvals');
        reply('Waiting for approvals..')
      }
    } else if (event.action === 'assigned') {
      const prInDb = await mongo.getPR(pr.id)


    } else if (event.action === 'submitted') {
      const submitter = event.review.user
      const reviewStatus = event.review.state

      log.info(`PR review submitted, user=${submitter.login}, Status=${reviewStatus}`)

      let prInDb = await mongo.getPR(pr.id)
      
      const index = prInDb.assignees.findIndex(a => a.id === submitter.id)
      submitter.reviewStatus = reviewStatus
      prInDb.assignees.splice(index, 1, submitter)

      prInDb = await mongo.updatePR(prInDb)

      
      let approvers = prInDb.assignees.find(a => a.reviewStatus === 'approved')
      if (approvers) {
        approvers = [].concat(approvers)
      }

      if (approvers && approvers.length === pr.assignees.length) {
        log.info(`All reviewers approved! ${approvers.map(a => a.login)}`)
        reply('All reviewers approved yay!')
        await github.updateStatus(pr, 'success')
      } else {
        await github.updateStatus(pr, 'failure')
      }

    } else {
      log.warn('Unhandled action type ' + event.action)
    }

    // if (event === 'pull_request_review' && event.state === 'approved') {
    // let pr = await mongo.getPR(3)
    // }

    // log.info(pr);
  } catch (err) {
    log.error(err)
    return null
  }

  return reply('Ok')
}

function handleUnsupportedEvent(reply, eventType) {
  let msg = 'Unsupported event type: ' + eventType
  log.warn(msg);
  return reply(msg) 
}