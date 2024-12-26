import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <div className='information'>
       <div className='defferent-parts'>
       <div className='talk'>
       <div className='titlee'>
        <h1>You Can Reach To Us <br />(Appointment)</h1>
       </div>
         <form onSubmit="">
         <div className="first">
         <div className='first-input'>
          <p className='par-p'>Your Name (required)</p>
         <input type="text" name="userName"id='userName' value="" placeholder=""onChange="" required />
         </div>
         <div className='second-input'>
         <p className='par-p'>Your Email(required)</p>
         <input type="email" name="userEmail"id='userEmail' value="" placeholder=""onChange="" required />
         </div>
         </div>
         <div className="text-area">
          <p className='par-p'>Your Message</p>
         <textarea name="userMessage"id='userMessage' value="" rows="6" placeholder=""onChange=""></textarea>
         </div>
         <div className='text-box'>
         <input type='checkbox' class='checkbox' id='' />
         <p className='par-p'>Please keep me updated on new activities, new sermons or new teachings.</p>
         </div>
         <button type="submit" className="submit">SEND MESSAGE</button>
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
              <p>Monday-Suturday</p>
              <p>10AM to 5PM</p>
            </div>
            <div className='telephone'>
              <h4>CONTACT</h4>
              <p>+250 780 377 645</p>
            </div>
            <div className='email'>
              <h4>EMAIL</h4>
              <p>karekezifiston30@gmail.com</p><hr className='hhr'/>
            </div>
          </div>
         </div>

    </div>
  )
}

export default Information
