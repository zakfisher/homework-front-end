import React, { Component } from 'react';
import SearchSidebar from './SearchSidebar';
import RepoList from './RepoList';
import '../styles/search-page.css';

class Search extends Component {

  componentDidMount() {
    const { getReposForUser, currentUser } = this.props;
    getReposForUser(currentUser);
  }

  render() {
    return (
      <div className="search-page">
        <SearchSidebar {...this.props} />
        <RepoList {...this.props} />
      </div>
    );
  }
}

export default Search;
