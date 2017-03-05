import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    Zak Fisher, {(new Date()).getFullYear()}
  </footer>
);

export default Footer;
