import React from 'react'
import './Home.css'
import Lux from '../../assets/Lux logo.svg'

const Home = () => {
  return (
    <div className='body'>
      

      <div className="container">
        <img src={Lux} alt="Lux Logo" />
        <h1 className='title'>Welcome to Lux</h1>
        <p>Bringing natural elegance to your digital experience</p>

          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      
      
    </div>
  )
}

export default Home
