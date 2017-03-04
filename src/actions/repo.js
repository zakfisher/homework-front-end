/*
 * action types
 */

export const GET_REPOS_BY_USER = 'GET_REPOS_BY_USER';
export const SET_CURRENT_REPOS = 'SET_CURRENT_REPOS';

/*
 * action creators
 */

export function getReposByUser(username = '') {
  return {
    type: GET_REPOS_BY_USER,
    username
  };
}

export function setCurrentRepos(repos = []) {
  return {
    type: SET_CURRENT_REPOS,
    repos
  };
};
