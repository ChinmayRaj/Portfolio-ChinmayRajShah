import React from 'react'
import './About.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import profile_img from'../../assets/about_profile2.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
       <h1>About Me</h1>
       <img src={theme_pattern} alt="loading..." />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I have graduated in Bachelor of Technology in Computer Science Engineering from Graphic Era University in 2024, I have honed my skills in various programming languages including C, C++, Java, Python,SQL. </p>
                <p>My passion for continuous learning and innovation has led me to delve deeper into the realm of machine learning, where I have developed proficiency in algorithms, and my experience in web development has provided me with the ability to create responsive and user-friendly interfaces, ensuring seamless user experiences.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"100%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"65%"}}/>
                </div>
                <div className="about-skill">
                    <p>Java</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>Javascript</p><hr style={{width:"65%"}}/>
                </div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>87.6%</h1>
            <p>Graduation</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>85.6%</h1>
            <p>Senior Secondary</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>92.8%</h1>
            <p>Matriculation</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
