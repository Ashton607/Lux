import React from 'react'
import './Dashboard.css'
import Lux from '../../assets/Lux logo.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Dashboard = () => {
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
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         navigation
         pagination={{ clickable: true }}
         autoplay={{ delay: 3000 }}
         loop={true}
         >
        <SwiperSlide>
        <div className="slide">
        <h2>Slide 1</h2>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
        <h2>Slide 2</h2>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slide">
        <h2>Slide 3</h2>
        </div>
        </SwiperSlide>
        </Swiper>

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
