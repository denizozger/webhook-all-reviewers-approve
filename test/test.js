import http from 'http';
import assert from 'assert';
import uuid from 'node-uuid';

// import '../lib/index.js';

import * as github from '../lib/services/github.js';
import * as mongo from '../lib/services/mongo.js';

describe('Webhook', () => {

  before(function() {
    prCreatedEvent['pull_request'].id = uuid.v4()
  });
  // it('should return 200', (done) => {
  //   http.get(`http://127.0.0.1:${process.env.PORT || 8000}`, res => {
  //     assert.equal(200, res.statusCode);
  //     done();
  //   });
  // });

  // it('github.test()', (done) => {
  //   github.test()
  //     .then(() => done())
  //     .catch(console.error)
  // });

  // it('mongo.getPR', (done) => {
  //   mongo.getPR(3)
  //     .then(() => done())
  //     .catch(console.error)
  // });

  // it('mongo.createPR', (done) => {
  //   mongo.createPR(prCreatedEvent['pull_request'])
  //     .then(() => done())
  //     .catch(console.error)
  // });

  // it('mongo.getPR', (done) => {
  //   mongo.getPR(prCreatedEvent['pull_request'].id)
  //     .then(() => done())
  //     .catch(console.error)
  // });

  it('mongo.updatePR', (done) => {
    let updatedPR = prCreatedEvent['pull_request']
    updatedPR.assignees.push({
        "login": "newassignee",
        "id": uuid.v4(),
        "type": "User",
        "site_admin": false
      })

    mongo.updatePR(updatedPR)
      .then(() => done())
      .catch(console.error)
  });

});

var prCreatedEvent = {
  "action": "opened",
  "number": 4,
  "pull_request": {
    "url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4",
    "id": undefined,
    "html_url": "https://github.com/denizozger/g1ph1nat0r/pull/4",
    "diff_url": "https://github.com/denizozger/g1ph1nat0r/pull/4.diff",
    "patch_url": "https://github.com/denizozger/g1ph1nat0r/pull/4.patch",
    "issue_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/4",
    "number": 4,
    "state": "open",
    "locked": false,
    "title": "wh test 2",
    "user": {
      "login": "denizozger",
      "id": 1227939,
      "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/denizozger",
      "html_url": "https://github.com/denizozger",
      "followers_url": "https://api.github.com/users/denizozger/followers",
      "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
      "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
      "organizations_url": "https://api.github.com/users/denizozger/orgs",
      "repos_url": "https://api.github.com/users/denizozger/repos",
      "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
      "received_events_url": "https://api.github.com/users/denizozger/received_events",
      "type": "User",
      "site_admin": false
    },
    "body": "",
    "created_at": "2016-11-12T11:23:26Z",
    "updated_at": "2016-11-12T11:23:26Z",
    "closed_at": null,
    "merged_at": null,
    "merge_commit_sha": "88d341645533607c042e4c8d0f0d515c17a73574",
    "assignee": {
      "login": "denizozgertest",
      "id": 23403559,
      "avatar_url": "https://avatars.githubusercontent.com/u/23403559?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/denizozgertest",
      "html_url": "https://github.com/denizozgertest",
      "followers_url": "https://api.github.com/users/denizozgertest/followers",
      "following_url": "https://api.github.com/users/denizozgertest/following{/other_user}",
      "gists_url": "https://api.github.com/users/denizozgertest/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/denizozgertest/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/denizozgertest/subscriptions",
      "organizations_url": "https://api.github.com/users/denizozgertest/orgs",
      "repos_url": "https://api.github.com/users/denizozgertest/repos",
      "events_url": "https://api.github.com/users/denizozgertest/events{/privacy}",
      "received_events_url": "https://api.github.com/users/denizozgertest/received_events",
      "type": "User",
      "site_admin": false
    },
    "assignees": [
      {
        "login": "denizozgertest",
        "id": 23403559,
        "avatar_url": "https://avatars.githubusercontent.com/u/23403559?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/denizozgertest",
        "html_url": "https://github.com/denizozgertest",
        "followers_url": "https://api.github.com/users/denizozgertest/followers",
        "following_url": "https://api.github.com/users/denizozgertest/following{/other_user}",
        "gists_url": "https://api.github.com/users/denizozgertest/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/denizozgertest/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/denizozgertest/subscriptions",
        "organizations_url": "https://api.github.com/users/denizozgertest/orgs",
        "repos_url": "https://api.github.com/users/denizozgertest/repos",
        "events_url": "https://api.github.com/users/denizozgertest/events{/privacy}",
        "received_events_url": "https://api.github.com/users/denizozgertest/received_events",
        "type": "User",
        "site_admin": false
      }
    ],
    "milestone": null,
    "commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4/commits",
    "review_comments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4/comments",
    "review_comment_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/comments{/number}",
    "comments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/4/comments",
    "statuses_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/statuses/a443579bf09c19f5391368cca06ad7a0c333a338",
    "head": {
      "label": "denizozger:wh-test-2",
      "ref": "wh-test-2",
      "sha": "a443579bf09c19f5391368cca06ad7a0c333a338",
      "user": {
        "login": "denizozger",
        "id": 1227939,
        "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/denizozger",
        "html_url": "https://github.com/denizozger",
        "followers_url": "https://api.github.com/users/denizozger/followers",
        "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
        "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
        "organizations_url": "https://api.github.com/users/denizozger/orgs",
        "repos_url": "https://api.github.com/users/denizozger/repos",
        "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
        "received_events_url": "https://api.github.com/users/denizozger/received_events",
        "type": "User",
        "site_admin": false
      },
      "repo": {
        "id": 69166190,
        "name": "g1ph1nat0r",
        "full_name": "denizozger/g1ph1nat0r",
        "owner": {
          "login": "denizozger",
          "id": 1227939,
          "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/denizozger",
          "html_url": "https://github.com/denizozger",
          "followers_url": "https://api.github.com/users/denizozger/followers",
          "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
          "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
          "organizations_url": "https://api.github.com/users/denizozger/orgs",
          "repos_url": "https://api.github.com/users/denizozger/repos",
          "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
          "received_events_url": "https://api.github.com/users/denizozger/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/denizozger/g1ph1nat0r",
        "description": "A mini REST API that fetches GIFs from Giphy and caches them",
        "fork": false,
        "url": "https://api.github.com/repos/denizozger/g1ph1nat0r",
        "forks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/forks",
        "keys_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/teams",
        "hooks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/hooks",
        "issue_events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/events{/number}",
        "events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/events",
        "assignees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/assignees{/user}",
        "branches_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/branches{/branch}",
        "tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/tags",
        "blobs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/languages",
        "stargazers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/stargazers",
        "contributors_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contributors",
        "subscribers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscribers",
        "subscription_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscription",
        "commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contents/{+path}",
        "compare_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/merges",
        "archive_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/downloads",
        "issues_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues{/number}",
        "pulls_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/labels{/name}",
        "releases_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/releases{/id}",
        "deployments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/deployments",
        "created_at": "2016-09-25T13:32:18Z",
        "updated_at": "2016-09-25T20:54:36Z",
        "pushed_at": "2016-11-12T11:22:31Z",
        "git_url": "git://github.com/denizozger/g1ph1nat0r.git",
        "ssh_url": "git@github.com:denizozger/g1ph1nat0r.git",
        "clone_url": "https://github.com/denizozger/g1ph1nat0r.git",
        "svn_url": "https://github.com/denizozger/g1ph1nat0r",
        "homepage": "",
        "size": 18,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 4,
        "forks": 0,
        "open_issues": 4,
        "watchers": 0,
        "default_branch": "master"
      }
    },
    "base": {
      "label": "denizozger:master",
      "ref": "master",
      "sha": "565ac2c80bab27b083949e7b916591dc55b64832",
      "user": {
        "login": "denizozger",
        "id": 1227939,
        "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/denizozger",
        "html_url": "https://github.com/denizozger",
        "followers_url": "https://api.github.com/users/denizozger/followers",
        "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
        "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
        "organizations_url": "https://api.github.com/users/denizozger/orgs",
        "repos_url": "https://api.github.com/users/denizozger/repos",
        "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
        "received_events_url": "https://api.github.com/users/denizozger/received_events",
        "type": "User",
        "site_admin": false
      },
      "repo": {
        "id": 69166190,
        "name": "g1ph1nat0r",
        "full_name": "denizozger/g1ph1nat0r",
        "owner": {
          "login": "denizozger",
          "id": 1227939,
          "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/denizozger",
          "html_url": "https://github.com/denizozger",
          "followers_url": "https://api.github.com/users/denizozger/followers",
          "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
          "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
          "organizations_url": "https://api.github.com/users/denizozger/orgs",
          "repos_url": "https://api.github.com/users/denizozger/repos",
          "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
          "received_events_url": "https://api.github.com/users/denizozger/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/denizozger/g1ph1nat0r",
        "description": "A mini REST API that fetches GIFs from Giphy and caches them",
        "fork": false,
        "url": "https://api.github.com/repos/denizozger/g1ph1nat0r",
        "forks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/forks",
        "keys_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/teams",
        "hooks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/hooks",
        "issue_events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/events{/number}",
        "events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/events",
        "assignees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/assignees{/user}",
        "branches_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/branches{/branch}",
        "tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/tags",
        "blobs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/languages",
        "stargazers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/stargazers",
        "contributors_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contributors",
        "subscribers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscribers",
        "subscription_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscription",
        "commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contents/{+path}",
        "compare_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/merges",
        "archive_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/downloads",
        "issues_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues{/number}",
        "pulls_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/labels{/name}",
        "releases_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/releases{/id}",
        "deployments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/deployments",
        "created_at": "2016-09-25T13:32:18Z",
        "updated_at": "2016-09-25T20:54:36Z",
        "pushed_at": "2016-11-12T11:22:31Z",
        "git_url": "git://github.com/denizozger/g1ph1nat0r.git",
        "ssh_url": "git@github.com:denizozger/g1ph1nat0r.git",
        "clone_url": "https://github.com/denizozger/g1ph1nat0r.git",
        "svn_url": "https://github.com/denizozger/g1ph1nat0r",
        "homepage": "",
        "size": 18,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 4,
        "forks": 0,
        "open_issues": 4,
        "watchers": 0,
        "default_branch": "master"
      }
    },
    "_links": {
      "self": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4"
      },
      "html": {
        "href": "https://github.com/denizozger/g1ph1nat0r/pull/4"
      },
      "issue": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/4"
      },
      "comments": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/4/comments"
      },
      "review_comments": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4/comments"
      },
      "review_comment": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/comments{/number}"
      },
      "commits": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls/4/commits"
      },
      "statuses": {
        "href": "https://api.github.com/repos/denizozger/g1ph1nat0r/statuses/a443579bf09c19f5391368cca06ad7a0c333a338"
      }
    },
    "merged": false,
    "mergeable": true,
    "mergeable_state": "unstable",
    "merged_by": null,
    "comments": 0,
    "review_comments": 0,
    "commits": 1,
    "additions": 0,
    "deletions": 0,
    "changed_files": 1
  },
  "repository": {
    "id": 69166190,
    "name": "g1ph1nat0r",
    "full_name": "denizozger/g1ph1nat0r",
    "owner": {
      "login": "denizozger",
      "id": 1227939,
      "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/denizozger",
      "html_url": "https://github.com/denizozger",
      "followers_url": "https://api.github.com/users/denizozger/followers",
      "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
      "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
      "organizations_url": "https://api.github.com/users/denizozger/orgs",
      "repos_url": "https://api.github.com/users/denizozger/repos",
      "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
      "received_events_url": "https://api.github.com/users/denizozger/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/denizozger/g1ph1nat0r",
    "description": "A mini REST API that fetches GIFs from Giphy and caches them",
    "fork": false,
    "url": "https://api.github.com/repos/denizozger/g1ph1nat0r",
    "forks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/forks",
    "keys_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/teams",
    "hooks_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/hooks",
    "issue_events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/events{/number}",
    "events_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/events",
    "assignees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/assignees{/user}",
    "branches_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/branches{/branch}",
    "tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/tags",
    "blobs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/languages",
    "stargazers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/stargazers",
    "contributors_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contributors",
    "subscribers_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscribers",
    "subscription_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/subscription",
    "commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/contents/{+path}",
    "compare_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/merges",
    "archive_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/downloads",
    "issues_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/issues{/number}",
    "pulls_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/labels{/name}",
    "releases_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/releases{/id}",
    "deployments_url": "https://api.github.com/repos/denizozger/g1ph1nat0r/deployments",
    "created_at": "2016-09-25T13:32:18Z",
    "updated_at": "2016-09-25T20:54:36Z",
    "pushed_at": "2016-11-12T11:22:31Z",
    "git_url": "git://github.com/denizozger/g1ph1nat0r.git",
    "ssh_url": "git@github.com:denizozger/g1ph1nat0r.git",
    "clone_url": "https://github.com/denizozger/g1ph1nat0r.git",
    "svn_url": "https://github.com/denizozger/g1ph1nat0r",
    "homepage": "",
    "size": 18,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 4,
    "forks": 0,
    "open_issues": 4,
    "watchers": 0,
    "default_branch": "master"
  },
  "sender": {
    "login": "denizozger",
    "id": 1227939,
    "avatar_url": "https://avatars.githubusercontent.com/u/1227939?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/denizozger",
    "html_url": "https://github.com/denizozger",
    "followers_url": "https://api.github.com/users/denizozger/followers",
    "following_url": "https://api.github.com/users/denizozger/following{/other_user}",
    "gists_url": "https://api.github.com/users/denizozger/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/denizozger/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/denizozger/subscriptions",
    "organizations_url": "https://api.github.com/users/denizozger/orgs",
    "repos_url": "https://api.github.com/users/denizozger/repos",
    "events_url": "https://api.github.com/users/denizozger/events{/privacy}",
    "received_events_url": "https://api.github.com/users/denizozger/received_events",
    "type": "User",
    "site_admin": false
  }
}