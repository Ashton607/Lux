import React from 'react';
import './Slide3.css';
import workflow from '../../assets/Slide3.png';
import lux from '../../assets/Lux logo.svg';
import proj1 from '../../assets/internet-3-svgrepo-com.svg';
import proj2 from '../../assets/inventory-svgrepo-com.svg';
import proj3 from '../../assets/love-svgrepo-com.svg';
import proj4 from '../../assets/birthday-cake-svgrepo-com.svg';
import { FaArrowRight } from 'react-icons/fa'; 

const Slide3 = () => {
  const projects = [
    { id: 1, title: 'Landing Page', icon: proj1, category: 'Web Application' },
    { id: 2, title: 'Inventory Management System', icon: proj2, category: 'Dashboard' },
    { id: 3, title: 'Romantic Solar System', icon: proj3, category: 'Creative WebGL' },
    { id: 4, title: 'Birthday Letter', icon: proj4, category: 'Interactive Experience' },
  ];

  return (
    <section className="slide3-section">
      <div className="slide3-container">
        
        {/* Left Column: Visual/Brand Showcase */}
        <div className="slide3-left">
          <div className="workflow-card">
            <img src={workflow} alt="Lux Workflow" className="workflow-img" />
          </div>
          <div className="brand-badge">
            <span className="badge-text">Made with</span>
            <img src={lux} alt="Lux Logo" className="lux-logo" />
          </div>
        </div>

        {/* Right Column: Interactive Projects Grid */}
        <div className="slide3-right">
          <header className="projects-header">
            <h2 className="title">Explorations & Core Projects</h2>
          </header>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-top">
                  <div className="icon-wrapper">
                    <img src={project.icon} alt={project.title} />
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <div className="card-body">
                  <h3>{project.title}</h3>
                </div>

                <div className="card-footer">
                  <span className="action-text">View Project</span>
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Slide3;