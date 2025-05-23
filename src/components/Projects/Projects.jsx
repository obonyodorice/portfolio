// src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css';
import { Network, Database, Settings, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Network size={32} />,
      title: "Local Area Network (LAN) Setup Project",
      type: "Network Infrastructure",
      description: "Designed and configured a comprehensive LAN setup for a small business model, incorporating routers, switches, and access points with secure connectivity protocols.",
      features: [
        "Network topology design and implementation",
        "Router and switch configuration",
        "Secure connectivity with firewall rules",
        "VLAN segmentation for network isolation",
        "Wireless access point integration"
      ],
      technologies: ["Packet Tracer", "Cisco Devices", "TCP/IP", "VLAN", "Firewall"],
      
    },
    {
      icon: <Database size={32} />,
      title: "Student Database Management System",
      type: "Database Application",
      description: "Developed a comprehensive relational database system to manage student academic records with full CRUD operations and an intuitive user interface.",
      features: [
        "Relational database design and normalization",
        "Complete CRUD operations implementation",
        "User-friendly interface development",
        "Data validation and integrity constraints",
        "Report generation functionality"
      ],
      technologies: ["MySQL", "Java", "JDBC", "Swing UI", "SQL"],
      
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
                <div className="project-type">{project.type}</div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>
                    <Settings size={16} />
                    Key Features
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;