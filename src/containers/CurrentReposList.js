import { connect } from 'react-redux';
import store from '../store';
import actions from '../actions';
import ReposList from '../components/ReposList';

/*
  Helpers
*/

const defaultUser = 'zakfisher';

// Set current user & get repos for user
const getReposByUser = username => {
  store.dispatch( actions.setCurrentUser(username) );
  store.dispatch( actions.getReposByUser(username) );
};

// Sort our list and apply filters
const sortRepoList = (state, ownProps) => {
  console.log('sort repo list', state.repos, ownProps.params);
  return state.repos;
};

const getRepos = (state, ownProps) => {
  const user = ownProps.params.username ? ownProps.params.username : defaultUser;
  const isCurrentUser = state.currentUser === user;

  // If same user, return filtered repo list
  if (isCurrentUser) return sortRepoList(state, ownProps);

  // If new user, get new repo list, return the current list in the meantime
  getReposByUser(user);

  return state.repos;
};

/*
  Map state and dispatch to component props
*/

const mapStateToProps = (state, ownProps) => ({
  repos: getRepos(state, ownProps)
});

const mapDispatchToProps = dispatch => ({});

const CurrentReposList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList);

export default CurrentReposList;

