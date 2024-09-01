import React from 'react'
import theme_pattern from'../../assets/theme_pattern.svg'
import course from '../../assets/course.js';
import './Courses.css'

const Courses = () => {
  return (
    <div className='course' id="course">
        <div className="mycourse-title">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="loading..." />
      </div>
      <div className="mycourses-container">
       {course.map((course,index)=>{
        return <a href={course.c_link} target='blank'>
          <img src={course.c_img} alt="loading..." key={index} />
          <h3>{course.c_name}</h3>
          </a>
       })}
      </div>
    </div>
  )
}

export default Courses
