/*
 * action types
 */

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

/*
 * action creators
 */

export function setCurrentUser(username = '') {
  return {
    type: SET_CURRENT_USER,
    username
  };
}
