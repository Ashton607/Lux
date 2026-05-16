import React, { useEffect, useState } from 'react'
import './Slide.css'
import LuxAd from '../../assets/Lux logo.svg'
import love from '../../assets/loveSVG.svg'
import Idea from '../../assets/Ideas.svg'
import interact from '../../assets/interact.svg'
import bulb from '../../assets/idea.svg'
import rose from '../../assets/rose.svg'
import valentine1 from '../../assets/Valentine.svg'
import cherry from '../../assets/cherry.svg'
import art from '../../assets/Art-amico.svg'


const Slide1 = () => {
  return (
    <div>
       <div className="slide1-container">

      <div className="content">
        <div className="art-bg">
        <img src={art} alt="Art Background"/>
      </div>
        
      </div>

      <div className="cards">

        <div className='card1'>
        <img src={love} alt="Love Icon"/>
        <h3>Emotion Through Software</h3>
        <p>Not just a page on a browser. 
           It's the most creative way to send a love letter to your partner.
           Because sometimes “I love you” deserves more than just a text message.</p>
        </div>

        <div className='card2'>
        <img src={Idea} alt="Idea Icon"/>
        <h3>Bringing <span>YOUR <img src={bulb} alt="bulb" /></span> Ideas To Life</h3>
        <p>Not just a wedding invitation,
           a beautifully interactive experience that tells your story before the big day even begins.</p>
        </div>

        <div className='card3'>
        <img src={interact} alt="Interaction Icon"/>
        <h3>Modern Interactive Experiences</h3>
        <p>We combine software, animation, storytelling, 
          and design to craft visually engaging and emotionally driven websites </p>
        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Slide1
