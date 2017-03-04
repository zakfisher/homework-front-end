import React from 'react';
import '../styles/repo-list.css';

const Repo = ({ name, description, watchers }) => (
  <li className="repo">
    <p>{name} - {watchers}<br/>{description || 'no description'}</p>
  </li>
);

Repo.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  watchers: React.PropTypes.number.isRequired
};

const ReposList = ({ repos }) => {
  return (
    <ul className="repo-list">
      { repos.map((repo, i) => <Repo key={i} {...repo} />) }
    </ul>
  );
};

ReposList.propTypes = {
  repos: React.PropTypes.array.isRequired
};

export default ReposList;
