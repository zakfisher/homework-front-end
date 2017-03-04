import actions from '../actions';

const { SET_CURRENT_USER } = actions

/*
 * Reducers
 */

export function currentUser(state = '', action) {
  switch (action.type) {

  case SET_CURRENT_USER:
    return action.username;

  default:
    return state;
  }
}
