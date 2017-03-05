import React from 'react';
import SearchSidebar from './SearchSidebar';
import RepoList from './RepoList';
import '../styles/search-page.css';

const Search = (props) => (
  <div className="search-page">
    <SearchSidebar {...props} />
    <RepoList {...props} />
  </div>
);

export default Search;
