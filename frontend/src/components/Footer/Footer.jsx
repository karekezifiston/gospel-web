import React from 'react'
import './Footer.css'
import logo from "../../assets/grace.png"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className='footer-content-left'>
                 <img src={logo} width={200} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorem quae nesciunt eaque non quis? Voluptas, ratione aspernatur nemo aliquam in esse iste corporis deserunt illo, voluptatibus est numquam eligendi!</p>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Private Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+250-780-377-645</li>
                <li>Contact@gracereformed.com</li>
              </ul>
            </div>
         </div>
         <hr />
         <p className='footer-copyright'>Copyright 2024 © Grace Reformed-All Right Reserved.</p>
    </div>
  )
}

export default Footer
