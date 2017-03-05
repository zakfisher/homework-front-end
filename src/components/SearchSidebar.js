import React from 'react';
import Footer from './Footer';
import '../styles/search-sidebar.css';

const SearchHistory = () => (
  <div className="search-sidebar__history">
    <h3>Search History</h3>
  </div>
);

const SearchSidebar = ({ currentUser, onUserFormSubmit, router }) => (
  <div className="search-sidebar">
    <form onSubmit={(e) => {
        e.preventDefault();
        onUserFormSubmit(e, router);
      }}>
      <h3>Current User</h3>
      <input name="username"
        placeholder="username..."
        defaultValue={currentUser} />
    </form>
    <SearchHistory />
    <Footer />
  </div>
);

SearchSidebar.propTypes = {
  currentUser: React.PropTypes.string.isRequired,
  onUserFormSubmit: React.PropTypes.func.isRequired,
  router: React.PropTypes.object.isRequired
};

export default SearchSidebar;
