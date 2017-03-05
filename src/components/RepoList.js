import React from 'react';
import '../styles/repo-list.css';

const Repo = ({ name, description, watchers }) => (
  <li className="repo-list__repo">
    <div className="repo-list__repo__inner">
      <p>{name} - {watchers}<br/>{description || 'no description'}</p>
    </div>
  </li>
);

Repo.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  watchers: React.PropTypes.number.isRequired
};

const List = ({ repos }) => <ul>{ repos.map((repo, i) => <Repo key={i} {...repo} />) }</ul>;
const EmptyList = () => <p>No repos to display.</p>

const ReposList = (props) => {
  return (
    <div className="repo-list">
      <h3>Public Repositories for <span>{props.currentUser}</span>:</h3>
      {props.repos.length ? <List {...props} /> : <EmptyList />}
    </div>
  );
};

ReposList.propTypes = {
  repos: React.PropTypes.array.isRequired,
  currentUser: React.PropTypes.string.isRequired
};

export default ReposList;
