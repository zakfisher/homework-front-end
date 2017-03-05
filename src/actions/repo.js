/*
 * action types
 */

export const SET_CURRENT_REPOS = 'SET_CURRENT_REPOS';

/*
 * action creators
 */

export function setCurrentRepos(repos = []) {
  return {
    type: SET_CURRENT_REPOS,
    repos
  };
};
