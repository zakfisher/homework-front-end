import Rx from 'rx-dom';
import store from '../store';
import actions from '../actions';

const { SET_CURRENT_USER, SET_CURRENT_REPOS } = actions;
const useFakeData = false;

/*
 * Helpers
 */

const getReposByUser = username => {
  if (!useFakeData) {
    Rx.DOM.get(`https://api.github.com/users/${username}/repos`)
    .subscribe(
      function onNext(xhr) {
        const repos = JSON.parse(xhr.response);
        store.dispatch(
          actions.setCurrentRepos(repos)
        );
      },
      function onError(err) {
        store.dispatch(
          actions.setCurrentRepos([])
        );
      }
    );
  }
  else {
    // If we hit github rate limits, use this..
    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, 100);
    });
    promise.then(() => {
      store.dispatch(
        actions.setCurrentRepos([
          { name: 'zaks wonder party', watchers: 24, description: 'its the shitttttt' }
        ])
      );
    });
  }
};

/*
 * Reducers
 */

export function repos(state = [], action) {
  switch (action.type) {

  case SET_CURRENT_USER:
    getReposByUser(action.username);
    return state;

  case SET_CURRENT_REPOS:
    return action.repos;

  default:
    return state;
  }
}
