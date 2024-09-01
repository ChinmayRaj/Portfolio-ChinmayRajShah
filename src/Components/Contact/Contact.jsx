import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b1845a23-790b-436f-9bec-c59863aa9db2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div  id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="loading..." />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently open to work and contribute to solving real world problems, so please feel free to connect with me .</p>
            <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="loading..." /><p>chinmayshah2002@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="loading..." /><p>+91-6396276378</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="loading..." /><p>Almora,Uttarakhand,India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
           <label htmlFor="">Enter your Name</label>
           <input type="text" placeholder='Enter your name' name='name' />
           <label htmlFor="">Enter your Email</label>
           <input type="email" placeholder='Enter your email' name='email' />
           <label htmlFor="">Enter your message here</label>
           <textarea  rows='10' placeholder='Enter your message' name='message' />
           <button type='submit' className="contact-submit">
            Submit now
           </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
