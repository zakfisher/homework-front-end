import React from 'react';
import SearchSidebar from '../components/SearchSidebar';
import CurrentReposList from '../containers/CurrentReposList';
import '../styles/search-page.css';

const Search = (props) => (
  <div className="search-page">
    <SearchSidebar {...props} />
    <CurrentReposList {...props} />
  </div>
);

export default Search;
