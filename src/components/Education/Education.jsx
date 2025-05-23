// src/components/Education/Education.jsx
import React from 'react';
import './Education.css';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Pwani University",
      degree: "BSc. Telecommunications and Information Technology",
      duration: "2022 – Present",
      coursework: "Data Structures, Computer Networks, Web Development, Database Systems, Cybersecurity",
      icon: <GraduationCap size={24} />
    },
    {
      institution: "Asumbi Girls High School",
      degree: "Kenya Certificate of Secondary Education",
      duration: "2018 – 2021",
      coursework: "Mathematics, Physics, Chemistry, Computer Studies",
      icon: <BookOpen size={24} />
    }
  ];

  const certifications = [
    {
      title: "Cisco Networking Basics (Introduction to Networks)",
      provider: "Coursera",
      status: "Expected 2025"
    },
    {
      title: "Google IT Support Fundamentals",
      provider: "Coursera", 
      status: "2024"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education & Certifications</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="institution-header">
                  <div className="institution-icon">
                    {item.icon}
                  </div>
                  <div className="institution-info">
                    <h3>{item.institution}</h3>
                    <div className="degree">{item.degree}</div>
                  </div>
                </div>
                
                <div className="duration">
                  <Calendar size={16} />
                  {item.duration}
                </div>
                
                <div className="coursework">
                  <h4>Relevant Coursework:</h4>
                  <p>{item.coursework}</p>
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>
            <Award size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Professional Certifications
          </h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <h4>{cert.title}</h4>
                <p>{cert.provider} • {cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;