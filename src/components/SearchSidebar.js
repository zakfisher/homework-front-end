import React, { Component } from 'react';
import Footer from './Footer';
import '../styles/search-sidebar.css';

const SearchHistory = () => (
  <div className="search-sidebar__history">
    <h3>Search History</h3>
  </div>
);

class SearchSidebar extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  static propTypes = {
    currentUser: React.PropTypes.string.isRequired,
    onUserFormSubmit: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const { getReposForUser, currentUser } = this.props;
    this.setState({ query: currentUser });
    getReposForUser(currentUser);
  }

  render() {
    const { onUserFormSubmit, router } = this.props;
    return (
      <div className="search-sidebar">
        <form onSubmit={(e) => {
            e.preventDefault();
            onUserFormSubmit(e, router);
          }}>
          <h3>Current User</h3>
          <input name="username"
            placeholder="username..."
            value={this.state.query}
            onChange={e => {
              this.setState({ query: e.target.value });
            }} />
        </form>
        <Footer />
      </div>
    );
  }
}

export default SearchSidebar;
