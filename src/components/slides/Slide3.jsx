import React from 'react';
import './Slide3.css';
import workflow from '../../assets/pc.jpg';
import lux from '../../assets/Lux logo.svg';
import { FaArrowRight,FaLaptopCode } from 'react-icons/fa';
import { MdInventory } from "react-icons/md";
import { GiSolarSystem } from "react-icons/gi";
import { BsEnvelopePaperHeart } from "react-icons/bs";

const Slide3 = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Landing Page', 
      icon: FaLaptopCode, 
      category: 'Professional',
      description: 'High-converting, performance-optimized entry points',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      id: 2, 
      title: 'Inventory Management', 
      icon: MdInventory, 
      category: 'Prestige',
      description: 'Real-time analytics and smart inventory tracking',
      gradient: 'from-emerald-500/10 to-teal-500/10'
    },
    { 
      id: 3, 
      title: 'Romantic Solar System', 
      icon: GiSolarSystem, 
      category: 'Professional & Essential',
      description: 'Immersive 3D storytelling experiences',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    { 
      id: 4, 
      title: 'Birthday Letter', 
      icon: BsEnvelopePaperHeart, 
      category: 'Essential',
      description: 'Personalized, animated digital keepsakes',
      gradient: 'from-amber-500/10 to-rose-500/10'
    },
  ];

  return (
    <section className="slide3-section">
      <div className="slide3-container">
        
        {/* Left Column: Visual/Brand Showcase */}
        <div className="slide3-left">
          <div className="workflow-card">
            <div className="workflow-glow" />
            <img src={workflow} alt="Lux Workflow" className="workflow-img" />
            <div className="workflow-overlay">
              <span className="view-demo">View interactive demo →</span>
            </div>
          </div>
          <div className="brand-badge">
            <span className="badge-text">Powered by</span>
            <img src={lux} alt="Lux Logo" className="lux-logo" />
          </div>
        </div>

        {/* Right Column: Interactive Projects Grid */}
        <div className="slide3-right">
          <div className="projects-header">
            <div className="header-tag">PORTFOLIO</div>
            <h2 className="title">
              Explorations & <span className="title-highlight">Core Projects</span>
            </h2>
            <p className="subtitle">
              Selected works showcasing our expertise in modern web experiences
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-glow" />
                
                <div className="card-top">
                  <div className="icon-wrapper">
                    <project.icon />
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="card-footer">
                  <div className="action-wrapper">
                    <span className="action-text">Visit Site</span>
                    <FaArrowRight className="arrow-icon" />
                  </div>
                  <div className="card-meta">
                    <span className="meta-year">2024</span>
                  </div>
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