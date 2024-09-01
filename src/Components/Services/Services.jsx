import React from 'react'
import './Services.css';
import theme_pattern from'../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="loading..." />
      </div>
      <div className="services-container">
{Services_Data.map((services,index)=>{
return <div className="services-format" key={index}>
    <h3>{services.s_no} </h3>
    <h2>{services.s_name}</h2>
    <p>{services.s_desc}</p>
    <div className="services-readmore">
       <p>Read More</p>
       <img src={arrow_icon} alt="loading..." /> 
    </div>
</div>
})}
      </div>
    </div>
  )
}

export default Services
