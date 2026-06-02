import React, { useEffect, useState } from 'react'
import './Slide.css'
import Lux from '../../assets/Lux logo.svg'
import { ArrowRight, Sparkles, Palette, Leaf, Star, ChevronDown, Code2, Layers, Heart, Cake, Mail, Church } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Slide1 = () => {
  return (
    <div>

       {/* Hero */}
      <section className="lm-hero">
        <div className="lm-hero-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <nav className="lm-nav">
          <div className="lm-nav-logo">
          </div>
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
              <button className="lm-btn-primary">Get Started <ArrowRight size={16} /></button>
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


    </div>
  )
}

export default Slide1
