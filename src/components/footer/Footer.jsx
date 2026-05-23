import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Lux from '../../assets/Lux logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-top">

        <div className="footer-brand">
          <img src={Lux} alt="Lux Logo" />
          <p>Bringing natural elegance to your digital experience</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Connect</li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Prestige</li>
            <li>Professional</li>
            <li>Essential</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li onClick={() => window.open('https://wa.me/27788825777', '_blank')}>
              <FaWhatsapp size={16} color="#25D366" /> WhatsApp
            </li>
            <li onClick={() => window.open('mailto:portmanashton4@gmail.com', '_blank')}>
              <SiGmail size={16} color="#EA4335" /> Gmail
            </li>
            <li onClick={() => window.open('https://www.instagram.com/ashton.b_jordan', '_blank')}>
              <FaInstagram size={16} color="#E1306C" /> Instagram
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lux. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer