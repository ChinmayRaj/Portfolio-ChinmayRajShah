import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo3.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="loading..." />
            <p>I am a software engineering graduate open to work and willing to contribute to projects.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="loading..." />
              <input type="email" name="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            @ 2024 Chinmay Raj Shah.All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
