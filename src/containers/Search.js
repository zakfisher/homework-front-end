import { connect } from 'react-redux';
import store from '../store';
import actions from '../actions';
import SearchPage from '../components/SearchPage';

/*
  Helpers
*/

// Get user from url
const getCurrentUser = (state, ownProps) => {
  let currentUser = state.currentUser;

  const { username } = ownProps.params;
  if (username) {
    currentUser = username;
  }

  return currentUser;
};

// Sort our list with number of watchers first
const getSortedRepoList = (state) => {
  let newState = { ...state };
  newState.repos = state.repos.sort((a, b) => {
    return b.watchers - a.watchers;
  });
  return newState.repos;
};

/*
  Map state and dispatch to component props
*/

const mapStateToProps = (state, ownProps) => ({
  repos: getSortedRepoList(state),
  currentUser: getCurrentUser(state, ownProps)
});

const mapDispatchToProps = dispatch => ({
  getReposForUser: username => {
    store.dispatch( actions.setCurrentUser(username) );
    store.dispatch( actions.getReposByUser(username) );
  },
  onUserFormSubmit: (e, router) => {
    const username = e.nativeEvent.target[0].value;
    router.push(`/repos/${username}`)
  }
});

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default Search;
