// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const links = ['home', 'about', 'skills', 'education', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Dorice Obonyo</div>
        <div className="links-desktop">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      {isMenuOpen && (
        <div className="links-mobile">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;