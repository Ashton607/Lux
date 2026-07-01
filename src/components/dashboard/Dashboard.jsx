import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import {Info, ArrowRight,Star,X } from 'lucide-react';
import { createPortal } from "react-dom";
import { FaWhatsapp, FaInstagram,FaLaptopCode,FaNetworkWired,FaLeaf } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { TiThMenuOutline } from "react-icons/ti";
import Footer from '../footer/Footer';
import {Link} from 'react-scroll'

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
const [isOpen, setIsOpen] = useState(false);
const [isClosing, setIsClosing] = useState(false);


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

{/*The our work section animiation when scrolling*/}
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


{/*The our package section animiation when scrolling on mobile*/}
useEffect(() => {
  if (window.innerWidth > 480) return; // skip on desktop

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const elements = entry.target.querySelectorAll('.packages h3, .packages p, .packages ul li');

      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add('animate-slide-in'));
      } else {
        elements.forEach(el => el.classList.remove('animate-slide-in'));
      }
    });
  }, { threshold: 0.1 });

  const workCards = document.querySelectorAll('.package1, .package2, .package3');
  workCards.forEach(card => observer.observe(card));

  return () => observer.disconnect();
}, []);



{/*The our quotes section animiation when scrolling on mobile*/}
useEffect(() => {
  if (window.innerWidth > 480) return; // skip on desktop

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const elements = entry.target.querySelectorAll('.quotes h3, .quotes p, .quotes ul li');

      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add('animate-slide-in'));
      } else {
        elements.forEach(el => el.classList.remove('animate-slide-in'));
      }
    });
  }, { threshold: 0.1 });

  const workCards = document.querySelectorAll('.qte1, .qte2, .qte3');
  workCards.forEach(card => observer.observe(card));

  return () => observer.disconnect();
}, []);





const modalClick = () => {
  setIsOpen(true);
}

const closePopup =()=>{
setIsClosing(true);
setTimeout(()=>{
  setIsOpen(false);
  setIsClosing(false)
},300);
} 



const modal = createPortal(
  <div 
    className={`modalbackground ${isOpen || isClosing ? 'modalopen' : ''}`} 
    onClick={closePopup}
  >
    <div 
      className={`modalcontainer ${isOpen && !isClosing ? 'modalcontainerOpen' : ''} ${isClosing ? 'modalcontainerClose' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-header">
        <h3>Quotation</h3>
        <button onClick={closePopup}>
          <X size={18} />
        </button>
      </div>

      <div className="modal-data">
        <h3>Reach Out Directly</h3>
        <ul>
          <li onClick={() => window.open('https://wa.me/27788825777', '_blank')}>
            <FaWhatsapp size={22} color="#25D366" />
            <span>078-882-5777</span>
          </li>

          <li onClick={() => window.open('mailto:portmanashton4@gmail.com', '_blank')}>
            <SiGmail size={22} color="#EA4335" />
            <span>portmanashton4@gmail.com</span>
          </li>

          <li onClick={() => window.open('https://www.instagram.com/ashton.b_jordan', '_blank')}>
            <FaInstagram size={22} color="#E1306C" />
            <span>ashton.b_jordan</span>
          </li>
        </ul>
      </div>
    </div>
  </div>,
  document.body
);

{/* Mobile Menu Toggle */}
const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
      {modal}
      <div className="header">
         <ul className={menuOpen ? 'show-mobile-menu' : ''}>
            <li><Link to="advert-container"  smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li><Link to="container1" smooth={true} offset={25} duration={500}>Services</Link></li>
            <li><Link to="about" smooth={true} offset={25} duration={500}>About</Link></li>
            <li><Link to="quotes-container" smooth={true} offset={25} duration={500}>Connect</Link></li>
        </ul>
        <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <TiThMenuOutline size={24} />}
        </span>
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
      <span className='container1-badge'>OUR SERVICE TIERS</span>
      <h1>Web Design Packages in the Northern Cape</h1>
      <p>Finding the right website developer shouldn't involve guesswork. We offer transparent, 
  fixed-price web design packages tailored to help Northern Cape small businesses and 
  startups build a professional online presence without breaking the bank.
      </p>

  <div className="packages">
    <div className="package1">
      <span className="pkg-icon"><FaLaptopCode /></span>
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
      <span className="pkg-icon"><FaNetworkWired /></span>
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
      <button className="visit-site" onClick={() => window.open('https://ashton607.github.io/luxphotography/', '_blank')}>
        Visit Site <ArrowRight size={14} />
      </button>
      </div>

    <div className="package3">
      <span className="pkg-icon"><FaLeaf /></span>
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
       <button className="visit-site" onClick={() => window.open('https://ashton607.github.io/romantic-solar-system/', '_blank')}>
        Visit Site <ArrowRight size={14} />
      </button>
      </div>
      </div>
      </div>



    {/*Our Work Section*/}
    <div className="about">
  <h2>OUR WORK</h2>
  <p>Below are examples of what you can expect from us.
    Each card shows the type of site you can expect, built with care and attention to detail.
  </p>

  <div className="work-grid">

    <div className="work-card">
      <div className="work-img work1-img" loading="lazy">
        <div className="work-label">
          <span className="work-icon"></span>
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
      <div className="work-img work2-img" loading="lazy">
        <div className="work-label">
          <span className="work-icon"></span>
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
      <div className="work-img work3-img" loading="lazy">
        <div className="work-label">
          <span className="work-icon"></span>
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
      <div className="work-img work4-img" loading="lazy">
        <div className="work-label">
          <span className="work-icon"></span>
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
      <div className="work-img work5-img" loading="lazy">
        <div className="work-label">
          <span className="work-icon"></span>
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
        <h2>OUR QUOTES</h2>
        <p>Understanding the difference between our service tiers to help you choose the perfect fit for your needs.</p>

       <div className="quotes">
  <div className="qte1">
    <div className="qte-img qte1-img">
      <div className="qte-label">
        <h3>Prestige</h3>
      </div>
    </div>
    <div className="qte-info">
      <ul>
        <li>Startup Businesses</li>
        <li>Corporate Businesses</li>
        <li>Local Businesses</li>
      </ul>
      <button className="get-quote-btn" onClick={modalClick}>
        Get Quote <ArrowRight size={14} />
      </button>
    </div>
  </div>

  <div className="qte2">
    <div className="popular-badge">Popular <Star size={18} /></div>
    <div className="qte-img qte2-img">
      <div className="qte-label">
        <h3>Professional</h3>
      </div>
    </div>
    <div className="qte-info">
      <ul>
        <li>Businesses</li>
        <li>Weddings</li>
        <li>Anniversaries</li>
        <li>Romantic Gestures</li>
        <li>Birthday Celebrations</li>
        <li>Events</li>
      </ul>
      <button className="get-quote-btn" onClick={modalClick}>
        Get Quote <ArrowRight size={14} />
      </button>
    </div>
  </div>

  <div className="qte3">
    <div className="qte-img qte3-img">
      <div className="qte-label">
        <h3>Essential</h3>
      </div>
    </div>
    <div className="qte-info">
      <ul>
        <li>Birthday Celebrations</li>
        <li>Romantic Gestures</li>
        <li>Anniversaries</li>
        <li>Events</li>
      </ul>
      <button className="get-quote-btn" onClick={modalClick}>
        Get Quote <ArrowRight size={14} />
      </button>
    </div>
  </div>
</div>
         <div className="disclaimer">
            <p><Info size={15}/>The examples above showcase ideal use cases for each package tier 
            and are not limited to specific project types. 
            Each package is flexible and can be tailored to suit your unique vision, goals, 
            and creative requirements.</p>
          </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
