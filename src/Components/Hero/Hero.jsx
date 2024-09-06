import React from 'react'
import './Hero.css';
import  profile_img from'../../assets/myhero2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  
  return (
    <div className='hero' id='hero'>
      <img src={profile_img} alt='loading...'/>
      <h1><span>I'm Chinmay Raj Shah ,</span>Software Engineer based in India. </h1>
      <p>I have hands-on experience in web development , android development and machine learning technologies.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/drive/folders/1m1GIgzyco6b5aqAcXN_nFJdWI9QNfiHf?usp=sharing" target='_blank'>My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero;
