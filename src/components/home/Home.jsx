import React from 'react'
import './Home.css'
import Lux from '../../assets/Lux logo.svg'

const Home = () => {
  return (
    <div className='body'>
      <img src={Lux} alt="Lux Logo" />

      <div className="container">
        <h1 className='title'>Welcome to Lux</h1>
        <p>Bringing natural elegance to your digital experience</p>
      </div>
      
    </div>
  )
}

export default Home
