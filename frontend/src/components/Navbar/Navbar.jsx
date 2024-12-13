import React,{useState} from "react";
import './Navbar.css'
import logo from "../../assets/grace.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] =useState("home");
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      const menu_btn = document.querySelector('.hamburger');
      const mobile_panel = document.querySelector('.Mobile_panel');
  
      menu_btn.classList.toggle('is-active');
      mobile_panel.classList.toggle('is-active');
  
    };
    const handleLinkClick = () => {
      toggleMobileMenu(false);
    };
  return (
    <section className="h-wrapper" id="home">
    <div className='Mobile_panel'>
        <ul className='menu-items'>
           <li className='menu-option'  onClick={() => setMenu('home')}>
           <Link to="/"onClick={(handleLinkClick)}
            className={`a ${menu === 'home' ? 'active' : ''}`}
            >Home</Link><hr className="hrr"/> 
            </li>

            <li className='menu-option' onClick={() => setMenu('sermons')}>
            <Link to="/sermons" onClick={handleLinkClick} 
              className={`a ${menu === 'sermons' ? 'active' : ''}`}
             >Sermons</Link><hr className="hrr"/>
              </li>

            <li className='menu-option' onClick={() => setMenu('bible-study')}>
            <Link to="/bible-study" onClick={handleLinkClick} 
              className={`a ${menu === 'bible-study' ? 'active' : ''}`}
              >Bible-Study</Link><hr className="hrr"/>
              </li>

            <li className='menu-option' onClick={() => setMenu('q&a')}>
            <Link to="/q&a" onClick={handleLinkClick} 
              className={`a ${menu === 'q&a' ? 'active' : ''}`}>Q&A</Link><hr className="hrr"/>
            </li>

            <li className='menu-option' onClick={() => setMenu('about')}>
            <Link to="about" onClick={handleLinkClick} 
              className={`a ${menu === 'about' ? 'active' : ''}`}>About Us</Link><hr className="hrr"/>
            </li>
  
        </ul>
        </div>
        <div className="h-container">
        <div className="hamburger_container">
              <button className="hamburger" onClick={toggleMobileMenu}>
                  <div className="bar"></div>
              </button>
          </div>
         
        <h3 className="nav_logo"><img src={logo} alt="" /></h3>
  
          
        <div className="menu">
        {/* <div className="hamburger_container">
              <button className="hamburger" onClick={toggleMobileMenu}>
                  <div className="bar"></div>
              </button>
          </div> */}
          <button className="no">Donate</button>
          <ul className='nav-item'>
            <li onClick={() => setMenu('home')}>
              <Link to="/" onClick={(handleLinkClick)} 
               className={`a ${menu === 'home' ? 'active' : ''}`}
              >Home</Link><hr className="hrr"/></li>

            <li onClick={() => setMenu('sermons')}>
              <Link to="/sermons" onClick={handleLinkClick}
                className={`a ${menu === 'sermons' ? 'active' : ''}`}
               >Sermons</Link><hr className="hrr"/></li>

            <li onClick={() => setMenu('bible-study')}>
              <Link to="/bible-study" onClick={handleLinkClick}
               className={`a ${menu === 'bible-study' ? 'active' : ''}`}
               >Bible-Study</Link><hr className="hrr"/></li>

            <li onClick={() => setMenu('q&a')}>
              <Link to="/q&a" onClick={handleLinkClick}
                className={`a ${menu === 'q&a' ? 'active' : ''}`}
               >Q&A</Link><hr className="hrr"/></li>

            <li onClick={() => setMenu('about')}>
              <Link to="/about" onClick={handleLinkClick}
                className={`a ${menu === 'about' ? 'active' : ''}`}
               >About Us</Link><hr className="hrr"/></li>
          </ul>
        </div>
        <button className="onee">
            Donate
        </button>
        </div>
        
    </section>
  )
}

export default Navbar
