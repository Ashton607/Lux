import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Lux from '../../assets/Lux logo.svg'
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
  return (
    <div>
    
      <div className="header">
        <img src={Lux} alt="Lux Logo"/>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Trivea</li>
            <li>Connect</li>
        </ul>
      </div>

      <div className="advert-container">
        <div className="slides">
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

      </div>

      <div className="about">

      </div>

      <div className="pricing">

      </div>

      <div className="container2">

      </div>

    </div>
  )
}

export default Dashboard
