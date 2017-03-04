import React from 'react';

const App = ({ children }) => {
  return (
    <div className="app">
      <h1>My app..</h1>
      {children}
    </div>
  );
}

export default App;
