// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.css';
import { Code, Database, Monitor, Wrench, Heart, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Java", "C++", "Python"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MySQL", "MySQL Server"]
    },
    {
      icon: <Monitor size={24} />,
      title: "Operating Systems",
      skills: ["Windows", "Linux"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Technologies",
      skills: ["Microsoft Office", "Packet Tracer", "Visual Studio Code"]
    }
  ];

  const networkingSkills = [
    "Router Configuration",
    "Switch Configuration", 
    "TCP/IP",
    "LAN/WAN Setup",
    "VLAN Segmentation"
  ];

  const softSkills = [
    "Problem-solving",
    "Team Collaboration", 
    "Critical Thinking",
    "Time Management"
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        
        <div className="skills-grid">
          {technicalSkills.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="skill-category">
            <div className="skill-icon">
              <Wrench size={24} />
            </div>
            <h3>Networking</h3>
            <div className="skill-tags">
              {networkingSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <h3>
            <Heart size={24} />
            Soft Skills
          </h3>
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;