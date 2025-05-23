// src/components/About/About.jsx
import React from 'react';
import './About.css';
import { Network, Database, Shield, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Professional Summary</h2>
          <div className="summary-card">
            <h3>About Me</h3>
            <p>
              Highly motivated and results-oriented Telecommunications and IT student with a keen interest 
              in networking, database management, and cloud technologies. Skilled in troubleshooting network 
              issues, implementing security protocols, and designing efficient database systems. Eager to 
              apply academic knowledge to practical industry challenges and committed to continuous learning 
              in the evolving field of technology.
            </p>
          </div>
          
          <div className="highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <Network size={24} />
              </div>
              <h4>Network Engineering</h4>
              <p>Experienced in router and switch configuration, TCP/IP, DNS, DHCP, and LAN/WAN setup</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <Database size={24} />
              </div>
              <h4>Database Management</h4>
              <p>Proficient in MySQL and SQL Server with experience in designing relational database systems</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <Shield size={24} />
              </div>
              <h4>Cybersecurity</h4>
              <p>Knowledge of firewall setup, data protection techniques, and security protocol implementation</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <BookOpen size={24} />
              </div>
              <h4>Continuous Learning</h4>
              <p>Currently pursuing certifications in Cisco Networking and Google IT Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;