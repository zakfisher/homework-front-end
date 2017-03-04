import Rx from 'rx-dom';
import store from '../store';
import actions from '../actions';

const { GET_REPOS_BY_USER, SET_CURRENT_REPOS } = actions;

/*
 * Helpers
 */

const getReposByUser = (username) => Rx.DOM.get(`https://api.github.com/users/${username}/repos`);

/*
 * Reducers
 */

export function repos(state = [], action) {
  switch (action.type) {

  case GET_REPOS_BY_USER:
    getReposByUser(action.username).subscribe(
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
    return state;

  case SET_CURRENT_REPOS:
    return action.repos;

  default:
    return state;
  }
}
