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



  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education </h2>
        
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

      </div>
    </section>
  );
};

export default Education;