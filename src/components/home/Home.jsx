import React, { useEffect, useState } from 'react'
import './Home.css'
import Lux from '../../assets/Lux logo.svg'

const Home = () => {
  return (
    <div className='body'>
      

      <div className="container">
        <img src={Lux} alt="Lux Logo" className='animate-in' />
        <h1 className='title animate-in'>Welcome to Lux</h1>
        <p className='animate-in'>Bringing natural elegance to your digital experience</p>

          <button className='animate-in'>Get Started</button>
          <button className='animate-in'>Learn More</button>
        </div>
      
      
    </div>
  )
}

export default Home
