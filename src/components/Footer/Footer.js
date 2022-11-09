import React from 'react'
import './Footer.css';
import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container footer-container'>
        <div>
          <div className='footer-logo'>
            <Link to='/'>
              <img src={logo} alt="" />
              <h2>adornment</h2>
            </Link>
          </div>
          <div className='footer-link'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>Register</Link>
          </div>
        </div>
        <div className="footer-about">
          <h3>About</h3>
          <p>Adornment Interior Solution provides interior design to home, office and restaurant. Adornment has done 12 home decoration projects, 5 offices and 1 restaurants so far. Please Contact for details. </p>
          <h3>Address</h3>
          <p>Zigatala, Dhanmondi-15<br /> Dhaka, Bangladesh</p>
        </div>
        <div className="footer-contact">
          <h3 className='mb-10'>Contact</h3>
          <FontAwesomeIcon icon={faPhone} />&nbsp; +880 1521 305 392 <br />
          <FontAwesomeIcon icon={faMailBulk} />&nbsp; shahtazrahman17@gmail.com
          <h3 className='mt-30 mb-10'>Follow Me</h3>
          <div className="social-media mt-10">
            <a href='https://www.facebook.com/'><FaFacebook /></a>
            <a href='https://www.instagram.com/'><FaInstagram /></a>
            <a href='https://www.twitter.com/'><FaTwitter /></a>
            <a href='https://www.linkedin.com/'><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className='copyright'><small>All Rights Reserved to &copy;2022 Adornment Interior Solution</small></div>
    </footer>
  )
}

export default Footer