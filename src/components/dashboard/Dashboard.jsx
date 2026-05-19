import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';

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

    <div className="container1">
      <h2>Crafting Digital Experiences</h2>
      <p>Transform your special moments into beautifully crafted digital experiences where creativity meets elegance.
    From intimate celebrations to grand events, Lux combines storytelling,
    animation, and modern design to create unforgettable interactive moments.
      </p>

  <div className="packages">
    <div className="package1">
      <span className="pkg-icon">🌐</span>
      <h3>Fullstack Digital Platforms</h3>
      <p>Complete web application with backend, database, and authentication</p>
      <p className="price">R5,000 - R15,000</p>
      <ul>
        <li>Custom Backend</li>
        <li>Database Integration</li>
        <li>User Authentication</li>
      </ul>
    </div>

    <div className="package2">
      <span className="pkg-icon">🎨</span>
      <h3>Responsive Digital Platforms</h3>
      <p>Beautiful, responsive frontend with modern design and animations</p>
      <p className="price">R2,500 - R5,000</p>
      <ul>
        <li>Responsive Design</li>
        <li>Modern UI/UX</li>
        <li>Animations</li>
        <li>SEO Optimized</li>
      </ul>
      </div>

    <div className="package3">
      <span className="pkg-icon">🪶📜</span>
      <h3>Creative Storytelling Experiences</h3>
      <p>Single page design with clean code and fast loading</p>
      <p className="price">R100 - R500</p>
      <ul>
        <li>Clean Code</li>
        <li>Fast Loading</li>
        <li>Mobile Friendly</li>
        <li>Custom Design</li>
       </ul>
      </div>
      </div>
      </div>

      <div className="about">
  <h2>Our Work by Occasion</h2>
  <p>Real examples of websites we've crafted for life's special moments. Each designed with care
    and attention to detail.
  </p>

  <div className="work-grid">

    <div className="work-card">
      <div className="work-img work1-img">
        <div className="work-label">
          <span className="work-icon">🎂</span>
          <h3>Birthday Celebrations</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Interactive party invitations with RSVP tracking, photo galleries, and countdown timers</p>
        <div className="work-tags">
          <span>RSVP System</span>
          <span>Photo Gallery</span>
          <span>Countdown Timer</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work2-img">
        <div className="work-label">
          <span className="work-icon">🏠</span>
          <h3>Wedding Websites</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Elegant wedding sites with ceremony details, registry integration, and guest management</p>
        <div className="work-tags">
          <span>Registry Integration</span>
          <span>Guest Lists</span>
          <span>Interactive Maps</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work3-img">
        <div className="work-label">
          <span className="work-icon">✉️</span>
          <h3>Event Invitations</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Digital invitations for corporate events, conferences, and special gatherings</p>
        <div className="work-tags">
          <span>Custom Designs</span>
          <span>Email Integration</span>
          <span>Analytics</span>
        </div>
      </div>
    </div>

    <div className="work-card">
      <div className="work-img work4-img">
        <div className="work-label">
          <span className="work-icon">🤍</span>
          <h3>Romantic Gestures</h3>
        </div>
      </div>
      <div className="work-info">
        <p>Personalized love letters, anniversary timelines, and surprise reveal pages</p>
        <div className="work-tags">
          <span>Custom Animations</span>
          <span>Interactive Stories</span>
          <span>Private Access</span>
        </div>
      </div>
    </div>

  </div>
</div>

      <div className="pricing">

      </div>

      <div className="container2">

      </div>

    </div>
  )
}

export default Dashboard
