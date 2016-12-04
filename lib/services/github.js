'use strict'

import GitHubApi from 'github'
import bluebird from 'bluebird'

const github = new GitHubApi({
  Promise: bluebird
});

// pending, success, error, failure
export function updateStatus(pr, state) {
  log.info(`Setting status=${state} of pr=${pr.url}`)
  return github.repos.createStatus({
    owner: pr.base.repo.owner.login,
    repo: pr.base.repo.name,
    sha: pr.base.sha,
    state: state,
    description: 'Enfore all reviewers to approve the pull request',
  })
}

export function test() {
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
  }).then(function(res) {
      // console.dir(res, { colors: true });
      console.log(res.map(event => {
        console.log(event);
        return {
          'username': event.actor.login,
          'event': event.event  
        }
      }));
      // console.log(res.map(event => event.event))
  });
}