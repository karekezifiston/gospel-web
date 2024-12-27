import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import './Information.css';
import send from "../../assets/send.png"

const Information = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent!');
          setFormData({ userName: '', userEmail: '', userMessage: '' }); // Reset form
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div className='information'>
      <div className='defferent-parts'>
        <div className='talk'>
          <div className='titlee'>
            <h1>You Can Reach To Us </h1><br />
            <h3>Question or Appointment</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="first">
              <div className='first-input'>
                <p className='par-p'>Your Name (required)</p>
                <input
                  type="text"
                  name="userName"
                  id='userName'
                  value={formData.userName}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='second-input'>
                <p className='par-p'>Your Email (required)</p>
                <input
                  type="email"
                  name="userEmail"
                  id='userEmail'
                  value={formData.userEmail}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-area">
              <p className='par-p'>Your Message</p>
              <textarea
                name="userMessage"
                id='userMessage'
                value={formData.userMessage}
                rows="6"
                placeholder="Enter your message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className='text-box'>
              <input type='checkbox' className='checkbox' id='' />
              <p className='par-p'>Please keep me updated on new activities, new sermons, or new teachings.</p>
            </div>
            <button type="submit" className="submit">SEND<img src={send}width={15} alt="" /></button>
          </form>
        </div>
        <div className='second-partt'>
          <div className='adress'>
            <h4>CHURCH ADRESS</h4>
            <p>KN 20 St, Nyarungenge</p>
            <p>Kigali, Rwanda</p>
          </div>
          <div className='opening-hours'>
            <h4>OPENING HOURS</h4>
            <p>Monday-Saturday</p>
            <p>10AM to 5PM</p>
          </div>
          <div className='telephone'>
            <h4>CONTACT</h4>
            <p>+250 780 377 645</p>
          </div>
          <div className='email'>
            <h4>EMAIL</h4>
            <p>karekezifiston30@gmail.com</p>
            <hr className='hhr' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
