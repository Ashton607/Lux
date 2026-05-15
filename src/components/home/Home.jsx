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
        const buttons = entry.target.querySelectorAll('button');

        if(entry.isIntersecting){
          img.classList.add('animate-in');
          title.classList.add('animate-in');
          p.classList.add('animate-in');
          buttons.forEach(btn => {btn.classList.add('animate-in');});
        }else{
          img.classList.remove('animate-in');
          title.classList.remove('animate-in');
          p.classList.remove('animate-in');
          buttons.forEach(btn => {btn.classList.remove('animate-in');});
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
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
        <button className='btn-primary' onClick={() => handleNavigate('/dashboard')}>
          Get Started
        </button>
        <button className='btn-secondary'>Learn More</button>
        </div>
      
      
    </div>
  )
}

export default Home
