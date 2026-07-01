import React, { useEffect, useState } from 'react'
import './Home.css'
import Lux from '../../assets/Lux logo.svg'
import { Link, useLocation,useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 1500); // how long the loader shows
  };

  
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry =>{
        const img = entry.target.querySelector('img');
        const title = entry.target.querySelector('.title');
        const p = entry.target.querySelector('p');
        const btn = entry.target.querySelector('.btn-primary');

        if (btn) {
          btn.addEventListener('animationend', () => {
            btn.classList.add('done');
          }, { once: true });
        }

        
        if(entry.isIntersecting){
          img.classList.add('animate-in');
          title.classList.add('animate-in');
          p.classList.add('animate-in');
          btn.classList.add('animate-in');
        }else{
          img.classList.remove('animate-in');
          title.classList.remove('animate-in');
          p.classList.remove('animate-in');
          btn.classList.remove('animate-in');
        }
      });   
    },{threshold: 0.1});

    const container = document.querySelector('.container');
    if(container){
      observer.observe(container);
    }

    return () => observer.disconnect();
  },[]);





  return (
    <div className='body'>
      
      <div className="container">
        <img src={Lux} alt="Lux Logo"/>
        <h1 className='title'>Welcome to Lux</h1>
        <p>Bringing natural elegance to your digital experience</p>

        {loading && (
        <div className="loader-wrapper">
        <div className="loader">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <mask id="clipping">
                <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
                <polygon points="25,25 75,25 50,75" fill="white"></polygon>
                <polygon points="50,25 75,75 25,75" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
                <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              </mask>
            </defs>
          </svg>
          <div className="box"></div>
        </div>
      </div>
      )}
        <button className='btn-primary' onClick={() => handleNavigate('/dashboard')}>
          Get Started
        </button>
        </div>
      
      
    </div>
  )
}

export default Home
