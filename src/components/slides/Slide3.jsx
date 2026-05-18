import React from 'react'
import './Slide3.css'
import workflow from '../../assets/Slide3.png'
import lux from '../../assets/Lux logo.svg'
import proj1 from '../../assets/internet-3-svgrepo-com.svg'
import proj2 from '../../assets/inventory-svgrepo-com.svg'
import proj3 from '../../assets/love-svgrepo-com.svg'
import proj4 from '../../assets/birthday-cake-svgrepo-com.svg'
import {  } from 'react-icons/fa'

const Slide3 = () => {
  return (
    <div>

      <div className="slide3-container">

        <div className="left">
          <img src={workflow} alt="Lux Workflow"/>
           <h3>Made <span className="with">with</span> <img src={lux} alt="Lux Logo" /></h3>
        </div>

        <div className="right">
         <div className="projects">

          <div className="project1">
            <img src={proj1} alt="Project 1" />
            <h3>Landing Page</h3>
            
          </div>

          <div className="project2">
            <img src={proj2} alt="Project 2" />
            <h3>Inventory Management System</h3>
          </div>

          <div className="project3">
            <img src={proj3} alt="Project 3" />
            <h3>Romantic Solar System</h3>
          </div>

          <div className="project4">
            <img src={proj4} alt="Project 4" />
            <h3>Birthday Letter</h3>
          </div>

         </div>
        </div>

      </div>


    </div>
  )
}

export default Slide3
