import React from 'react'
import './Projects.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div className='mywork' id='mywork'>
      <div className="mywork-title">
        <h1>My Recent Projects</h1>
        <img src={theme_pattern} alt="loading..." />
      </div>
      <div className="mywork-container">
       {mywork_data.map((work,index)=>{
        return <a href={work.w_link} target='blank'><img src={work.w_img} alt="loading..." key={index} />
        <h3>{work.w_name}</h3></a>
       })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="loading..." />
      </div> */}
    </div>
  )
}

export default Projects
