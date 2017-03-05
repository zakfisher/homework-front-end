import React from 'react';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

const App = ({ children }) => (
  <Layout name="app">
    <Nav />
    {children}
  </Layout>
);

App.propTypes = {
  children: React.PropTypes.object
}

export default App;
