import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import {Info, ArrowRight,Star } from 'lucide-react';

const Dashboard = () => {
  const slides = [
  { id: 1, content:<Slide1/> },
  { id: 2, content: <Slide2/> },
  { id: 3, content: <Slide3/> },
];

const [current, setCurrent] = useState(0);
const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
const [paused, setPaused] = useState(false);


{/* Touch event handlers-to swipe to the next/previous slide */}
const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};


{/* Auto-play functionality: change slides automatically */}
useEffect(() => {
  if (paused) return;

  const autoPlay = setInterval(() => {
    setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
  }, 15000);

  return () => clearInterval(autoPlay);
}, [paused]);

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;
  const minSwipeDistance = 50;

  if (distance > minSwipeDistance) {
    next();
  } else if (distance < -minSwipeDistance) {
    prev();
  }

  // pause autoplay for 5 seconds after swipe then resume
  setPaused(true);
  setTimeout(() => setPaused(false), 5000);

  setTouchStart(null);
  setTouchEnd(null);
};


useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const elements = entry.target.querySelectorAll('.work-label h3, .work-info p, .work-tags span');

      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add('animate-slide-in'));
      } else {
        elements.forEach(el => el.classList.remove('animate-slide-in'));
      }
    });
  }, { threshold: 0.1 });

  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach(card => observer.observe(card));

  return () => observer.disconnect();
}, []);


  return (
    <div>
    
      <div className="header">
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Trivea</li>
            <li>Connect</li>
        </ul>
      </div>

      <div className="advert-container">
        <div className="slides" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {slides[current].content}
        <div className="slides-footer">
        <button onClick={prev}>←</button>
        <div className="dots">
         {slides.map((_, i) => (
        <span key={i} className={i === current ? 'dot active' : 'dot'} onClick={() => setCurrent(i)} />
         ))}
      </div>
      <button onClick={next}>→</button>
      </div>
      </div>

     </div>


     {/*Packages Section*/}

    <div className="container1">
      <h2>Crafting Digital Experiences</h2>
      <p>Transform your special moments into beautifully crafted digital experiences where creativity meets elegance.
    From intimate celebrations to grand events, Lux combines storytelling,
    animation, and modern design to create unforgettable interactive moments.
      </p>

  <div className="packages">
    <div className="package1">
      <span className="pkg-icon">✨</span>
      <h3>Prestige</h3>
      <p>full stack digital platforms engineered for creativity,precision, and seamless user experience
         Best for startups, growing businesses, and custom web applications requiring backend systems, 
         databases, and authentication.
         <br />
         <br />
      </p>
      <hr />
      <ul>
        <li>Full Stack Web Application</li>
        <li>Database Integration And Management</li>
        <li>API Integration</li>
        <li>Responsive Design</li>
      </ul>
      <button className="visit-site">
        Visit Site <ArrowRight size={14} />
      </button>
    </div>

    <div className="package2">
      <span className="pkg-icon">🎨</span>
      <h3>Professional</h3>
      <p>Modern interactive frontend experiences designed for brands, events, and businesses.
         Ideal for business landing pages, wedding invitations, portfolios, product showcases, and immersive event experiences that combine elegant UI/UX with visually engaging animations.</p>
      <hr />
      <ul>
        <li>Responsive Design</li>
        <li>Modern UI/UX</li>
        <li>Animations</li>
        <li>SEO Optimized</li>
        <li>Elegant Visual Storytelling</li>
      </ul>
      <button className="visit-site" onClick={() => window.open('https://ashton607.github.io/Foundation/', '_blank')}>
        Visit Site <ArrowRight size={14} />
      </button>
      </div>

    <div className="package3">
      <span className="pkg-icon">🍃</span>
      <h3>Essential</h3>
      <p>Beautiful single-page digital experiences crafted for personal moments and creative expression.
         Perfect for romantic gestures, birthday surprises, digital letters, invitations, and visually immersive personal pages designed with elegant animations and stunning responsive visuals.</p>
      <hr />
      <ul>
        <li>Custom HTML/CSS design</li>
        <li>Responsive mobile-friendly layout</li>
        <li>Smooth animations and transitions</li>
        <li>Personalized visual styling</li>
       </ul>
       <button className="visit-site" onClick={() => window.open('https://luxloveletter.netlify.app', '_blank')}>
        Visit Site <ArrowRight size={14} />
      </button>
      </div>
      </div>
      </div>



    {/*Our Work Section*/}
    <div className="about">
  <h2>Our Work by Occasion</h2>
  <p>Real examples of websites we've crafted for life's special moments. Each designed with care
    and attention to detail.
  </p>

  <div className="work-grid">

    <div className="work-card">
      <div className="work-img work1-img">
        <div className="work-label">
          <span className="work-icon">💼</span>
          <h3>Businesses</h3>
        </div>
      </div>
      <div className="work-info">
        <p>A traditional, multi-page website that acts as a digital profile for your company.</p>
        <br />
        <div className="work-tags">
          <span>Brochure Website</span>
          <span>Landing Page</span>
          <span>Single Page Application</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work2-img">
        <div className="work-label">
          <span className="work-icon">⛪</span>
          <h3>Weddings & Anniversaries</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Elegant digital wedding & anniversary experiences designed to celebrate love with RSVP functionality, creative storytelling, and interactive maps</p>
        <div className="work-tags">
          <span>RSVP Functionality</span>
          <span>Invitations</span>
          <span>Interactive Maps</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work3-img">
        <div className="work-label">
          <span className="work-icon">✉️</span>
          <h3>Events</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Digital invitations for corporate events, conferences, special gatherings, graduations, matric dances and church events</p>
        <div className="work-tags">
          <span>Posters</span>
          <span>Landing Page</span>
          <span>Invitations</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work4-img">
        <div className="work-label">
          <span className="work-icon">💗</span>
          <h3>Romantic Gestures</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Personalized love letters, anniversary timelines, and surprise reveal pages</p>
        <div className="work-tags">
          <span>Custom Animations</span>
          <span>Interactive Stories</span>
          <span>Love letters</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work5-img">
        <div className="work-label">
          <span className="work-icon">🎂</span>
          <h3>Birthday Celebrations</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Interactive party invitations with RSVP tracking, photo galleries,birthday letters and countdown timers</p>
        <br />
        <div className="work-tags">
          <span>Photo Gallery</span>
          <span>Invitations</span>
          <span>Posters</span>
        </div>
      </div>
    </div>

  </div>
</div>


      {/*Quotes Section*/}
      <div className="quotes-container">
        <h2>What's Included</h2>
        <p>Understanding the difference between our service tiers to help you choose the perfect fit for your needs.</p>

        <div className="quotes">
          <div className="qte1">
            <span className="qte-icon">✨</span>
            <h3>Prestige</h3>
            <p>Fullstack digital platforms designed for growing businesses, startups, and 
              powerful online experiences built for web applications with user authenticationm, databases
              & API integration.</p>
              <hr />
            <ul>
              <li>Startup Businesses</li>
              <li>Corporate Businesses</li>
              <li>Local Businesses</li>
            </ul>
            <button className="get-quote-btn">
             Get Quote <ArrowRight size={14} />
            </button>
          </div>

          <div className="qte2">
            <div className="popular-badge">Popular<Star size={18}/></div>
            <span className="qte-icon">🎨</span>
            <h3>Professional</h3>
            <p>Beautifully crafted interactive experiences combining modern design, 
              immersive visuals, and seamless user interaction for brands, events, 
              and creative projects</p>
              <hr />
            <ul>
              <li>Businesses</li>
              <li>Weddings</li>
              <li>Anniversaries</li>
              <li>Romantic Gestures</li>
              <li>Birthday Celebrations</li>
              <li>Events</li>
            </ul>
            <button className="get-quote-btn">
             Get Quote <ArrowRight size={14} />
            </button>
          </div>

          <div className="qte3">
            <span className="qte-icon">🍃</span>
            <h3>Essential</h3>
            <p>Elegant single-page digital experiences designed to turn personal moments, 
              celebrations, and creative ideas into visually memorable experiences.</p>
              <hr />
            <ul>
              <li>Birthday Celebrations</li>
              <li>Romantic Gestures</li>
              <li>Anniversaries</li>
              <li>Events</li>
            </ul>
            <button className="get-quote-btn">
             Get Quote <ArrowRight size={14} />
            </button>
          </div>

        </div>
         <div className="disclaimer">
            <p><Info size={15}/>The examples above showcase ideal use cases for each package tier 
            and are not limited to specific project types. 
            Each package is flexible and can be tailored to suit your unique vision, goals, 
            and creative requirements.</p>
          </div>
        
      </div>

    </div>
  )
}

export default Dashboard
