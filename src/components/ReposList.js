import React from 'react';

const Repo = ({ name, watchers }) => {
  return <p>{name} - {watchers}</p>
};

const ReposList = ({ repos }) => {
  return (
    <div className="ReposList">
      { repos.map((repo, i) => <Repo key={i} {...repo} />) }
    </div>
  );
};

ReposList.propTypes = {
  repos: React.PropTypes.array.isRequired
};

export default ReposList;
