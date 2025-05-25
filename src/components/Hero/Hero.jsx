// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import { Phone, Mail, MapPin, Download } from 'lucide-react';
import profile from '../../assets/profile.png'; // Add your profile image here

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profile} alt="Dorice Adhiambo Obonyo" className="profile-pic" />
        
        <h1>Dorice Adhiambo Obonyo</h1>
        <h2>University Student - Telecommunications, IT, and Networking</h2>
        <p>
          Highly motivated and results-oriented student with a keen interest in networking and 
          database management. Skilled in troubleshooting network issues and designing efficient database systems.
        </p>
        <div className="hero-buttons">
          <a href="/Dorice_Enhanced_CV.docx" download>
            <Download size={20} />
            Download CV
          </a>
          <button onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={16} />
            <span>0114076750</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>obonyodorice3@gmail.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>PO Box 195-80108, Pwani University</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;