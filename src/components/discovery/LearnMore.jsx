import React, { useEffect, useRef, useState } from 'react'
import './LearnMore.css'
import Lux from '../../assets/Lux logo.svg'
import { ArrowRight, Sparkles, Palette, Leaf, Star, ChevronDown, Code2, Layers, Heart, Cake, Mail, Church } from 'lucide-react'
import { Link } from 'react-router-dom'

const LearnMore = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sparkles size={28} />,
      name: 'Prestige',
      tag: 'Fullstack',
      color: '#7c3aed',
      desc: 'Full stack digital platforms engineered for creativity, precision, and seamless user experience. Built for startups, growing businesses, and custom web applications requiring backend systems, databases, and authentication.',
      features: ['Full Stack Web Application', 'Database Integration', 'API Integration', 'User Authentication', 'Responsive Design'],
    },
    {
      icon: <Palette size={28} />,
      name: 'Professional',
      tag: 'Frontend',
      color: '#0d9488',
      desc: 'Modern interactive frontend experiences designed for brands, events, and businesses. Elegant UI/UX with visually engaging animations for landing pages, wedding invitations, portfolios, and product showcases.',
      features: ['Responsive Design', 'Modern UI/UX', 'Animations', 'SEO Optimized', 'Elegant Visual Storytelling'],
    },
    {
      icon: <Leaf size={28} />,
      name: 'Essential',
      tag: 'HTML',
      color: '#16a34a',
      desc: 'Beautiful single-page digital experiences crafted for personal moments. Perfect for romantic gestures, birthday surprises, digital letters, and visually immersive personal pages.',
      features: ['Custom HTML/CSS Design', 'Mobile-Friendly Layout', 'Smooth Animations', 'Personalized Styling'],
    },
  ];

  const occasions = [
    { icon: <Layers size={22} />, label: 'Businesses', desc: 'Brochure sites, landing pages, and full web applications for startups and corporates.' },
    { icon: <Church size={22} />, label: 'Weddings & Anniversaries', desc: 'Elegant digital experiences with RSVP, interactive maps, and guest management.' },
    { icon: <Mail size={22} />, label: 'Events', desc: 'Digital invitations for corporate events, graduations, matric dances, and church events.' },
    { icon: <Heart size={22} />, label: 'Romantic Gestures', desc: 'Personalized love letters, anniversary timelines, and surprise reveal pages.' },
    { icon: <Cake size={22} />, label: 'Birthday Celebrations', desc: 'Interactive party invitations with RSVP tracking, photo galleries, and countdown timers.' },
  ];

  const process = [
    { step: '01', title: 'Consult', desc: 'We start with a conversation to understand your vision, occasion, and goals.' },
    { step: '02', title: 'Design', desc: 'We craft a bespoke digital concept tailored to your brand and aesthetic.' },
    { step: '03', title: 'Build', desc: 'Your experience is engineered with precision, animations, and responsiveness.' },
    { step: '04', title: 'Deliver', desc: 'We launch your digital experience and provide support post-delivery.' },
  ];

  return (
    <div className="lm-root">

      {/* Hero */}
      <section className="lm-hero">
        <div className="lm-hero-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <nav className="lm-nav">
          <div className="lm-nav-logo">
            <img src={Lux} alt="Lux" />
            <span>Lux</span>
          </div>
          <Link to="/dashboard">
            <button className="lm-nav-btn">Dashboard <ArrowRight size={14} /></button>
          </Link>
        </nav>

        <div className="lm-hero-content">
          <div className="lm-hero-badge">Digital Experience Studio</div>
          <h1 className="lm-hero-title">
            Crafting Digital<br />
            <span className="lm-hero-accent">Experiences</span><br />
            That Last
          </h1>
          <p className="lm-hero-sub">
            From intimate celebrations to corporate platforms — Lux combines storytelling,
            animation, and modern design to create unforgettable interactive moments.
          </p>
          <div className="lm-hero-actions">
            <Link to="/dashboard">
              <button className="lm-btn-primary">Get Started <ArrowRight size={16} /></button>
            </Link>
            <a href="#services">
              <button className="lm-btn-ghost">Our Services <ChevronDown size={16} /></button>
            </a>
          </div>
        </div>

        <div className="lm-hero-scroll">
          <span>Scroll to explore</span>
          <div className="lm-scroll-line" />
        </div>
      </section>

      {/* About */}
      <section className="lm-about" id="about" data-observe>
        <div className="lm-about-inner">
          <div className="lm-section-tag">Who We Are</div>
          <h2 className="lm-section-title">Natural Elegance.<br />Digital Precision.</h2>
          <p className="lm-about-body">
            Lux is a digital experience studio built on the belief that every moment deserves
            to be beautifully expressed online. We design and engineer bespoke digital platforms,
            interactive experiences, and visual stories — each one crafted with intention,
            elegance, and technical precision.
          </p>
          <div className="lm-about-stats">
            <div className="lm-stat">
              <span className="lm-stat-num">3</span>
              <span className="lm-stat-label">Service Tiers</span>
            </div>
            <div className="lm-stat">
              <span className="lm-stat-num">5+</span>
              <span className="lm-stat-label">Occasion Types</span>
            </div>
            <div className="lm-stat">
              <span className="lm-stat-num">∞</span>
              <span className="lm-stat-label">Creative Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="lm-services" id="services" data-observe>
        <div className="lm-section-tag">What We Offer</div>
        <h2 className="lm-section-title">Our Service Tiers</h2>
        <p className="lm-section-sub">Three carefully crafted tiers to match every vision and budget.</p>

        <div className="lm-services-grid">
          {services.map((s, i) => (
            <div className="lm-service-card" key={i} style={{ '--accent': s.color, animationDelay: `${i * 0.15}s` }}>
              <div className="lm-service-icon" style={{ color: s.color }}>{s.icon}</div>
              <div className="lm-service-tag">{s.tag}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.features.map((f, j) => (
                  <li key={j}><span className="lm-check" style={{ color: s.color }}>✓</span> {f}</li>
                ))}
              </ul>
              <button className="lm-service-btn" style={{ '--accent': s.color }}>
                Get Quote <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="lm-occasions" data-observe>
        <div className="lm-section-tag">Who We Serve</div>
        <h2 className="lm-section-title">Built for Every Occasion</h2>
        <p className="lm-section-sub">Real digital experiences crafted for life's most meaningful moments.</p>

        <div className="lm-occasions-list">
          {occasions.map((o, i) => (
            <div className="lm-occasion-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="lm-occasion-icon">{o.icon}</div>
              <div className="lm-occasion-text">
                <h4>{o.label}</h4>
                <p>{o.desc}</p>
              </div>
              <ArrowRight size={16} className="lm-occasion-arrow" />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="lm-process" data-observe>
        <div className="lm-section-tag">How It Works</div>
        <h2 className="lm-section-title">Our Process</h2>
        <p className="lm-section-sub">A streamlined approach from concept to launch.</p>

        <div className="lm-process-grid">
          {process.map((p, i) => (
            <div className="lm-process-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="lm-process-step">{p.step}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              {i < process.length - 1 && <div className="lm-process-line" />}
            </div>
          ))}
        </div>
      </section>

      {/* Popular Badge Section */}
      <section className="lm-popular" data-observe>
        <div className="lm-popular-inner">
          <div className="lm-popular-badge">
            <Star size={16} /> Most Popular
          </div>
          <h2>Professional Tier</h2>
          <p>
            Our most chosen service — perfect for businesses, weddings, events,
            romantic gestures, birthday celebrations, and anniversaries.
            A complete frontend experience with modern UI/UX, animations, and SEO optimization.
          </p>
          <Link to="/dashboard">
            <button className="lm-btn-primary">View Pricing <ArrowRight size={16} /></button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="lm-cta" data-observe>
        <div className="lm-cta-inner">
          <img src={Lux} alt="Lux" className="lm-cta-logo" />
          <h2>Ready to Bring Your Vision to Life?</h2>
          <p>Let's create something unforgettable together.</p>
          <Link to="/dashboard">
            <button className="lm-btn-primary lm-cta-btn">
              Start Your Project <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default LearnMore