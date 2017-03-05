import { connect } from 'react-redux';
import actions from '../actions';
import SearchPage from '../components/SearchPage';

/*
  Helpers
*/

const getCurrentUser = (state, ownProps) => {

  // Get user from url
  const { username } = ownProps.params;
  if (username) {
    return username;
  }

  // Render with default user on homepage
  else if (ownProps.router.location.pathname === '/') {
    return actions.DEFAULT_USER;
  }

  return state.currentUser;
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
    dispatch( actions.setCurrentUser(username) );
  },
  onUserFormSubmit: (e, router) => {
    const username = e.nativeEvent.target[0].value;
    router.push(`/repos/${username}`)
    dispatch( actions.setCurrentUser(username) );
  }
});

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default Search;
