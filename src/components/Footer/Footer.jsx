import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Dorice Adhiambo Obonyo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;