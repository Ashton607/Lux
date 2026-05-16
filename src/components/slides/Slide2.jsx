import React from 'react'
import './Slide2.css'
import { FaRocket, FaShieldAlt, FaSeedling, FaHandshake } from 'react-icons/fa'

const Slide2 = () => {
  return (
    <div className="slide2-container">

      <div className="slide2-header">
        <h2>Key Project Benefits</h2>
        <p>Four advantages highlight workflow impact on outcomes</p>
      </div>

      <div className="slide2-content">

        {/* Left labels */}
        <div className="left-labels">
          <div className="label">
            <h4>Better Quality</h4>
            <p>Testing meticulously ensures higher product reliability and performance</p>
          </div>
          <div className="label">
            <h4>Stronger Engagement</h4>
            <p>Frequent and effective collaboration builds better customer engagement.</p>
          </div>
        </div>

        {/* Center cards */}
        <div className="center-cards">
          <div className="benefit-card green">
            <FaRocket size={30} color="#fff" />
            <span className="number">01</span>
          </div>
          <div className="benefit-card teal">
            <FaShieldAlt size={30} color="#fff" />
            <span className="number">02</span>
          </div>
          <div className="benefit-card dark-teal">
            <FaSeedling size={30} color="#fff" />
            <span className="number">03</span>
          </div>
          <div className="benefit-card dark">
            <FaHandshake size={30} color="#fff" />
            <span className="number">04</span>
          </div>
        </div>

        {/* Right labels */}
        <div className="right-labels">
          <div className="label">
            <h4>Faster Delivery</h4>
            <p>Projects progress more quickly with smaller, frequent incremental releases.</p>
          </div>
          <div className="label">
            <h4>Higher Flexibility</h4>
            <p>Teams can adapt incredibly easily to new requirements or unexpected changes.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slide2