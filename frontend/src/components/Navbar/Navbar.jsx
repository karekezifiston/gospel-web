import React, { useState, useEffect } from "react";
import './Navbar.css'
import logo from "../../assets/q.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Get initial state from localStorage, fallback to 'home' if not set
    const [menu, setMenu] = useState(localStorage.getItem('activeMenu') || 'home');
    const [isOpen, setIsOpen] = useState(false);

    // Update localStorage whenever the menu state changes
    useEffect(() => {
        localStorage.setItem('activeMenu', menu);
    }, [menu]);

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
                    <li className='menu-option' onClick={() => setMenu('home')}>
                        <Link to="/" onClick={handleLinkClick} className={`a ${menu === 'home' ? 'active' : ''}`}>Home</Link><hr className="hrr" />
                    </li>
                    <li className='menu-option' onClick={() => setMenu('podcast')}>
                        <Link to="/podcast" onClick={handleLinkClick} className={`a ${menu === 'podcast' ? 'active' : ''}`}>Podcast</Link><hr className="hrr" />
                    </li>
                    <li className='menu-option' onClick={() => setMenu('sermons')}>
                        <Link to="/sermons" onClick={handleLinkClick} className={`a ${menu === 'sermons' ? 'active' : ''}`}>Sermons</Link><hr className="hrr" />
                    </li>
                    <li className='menu-option' onClick={() => setMenu('bible-study')}>
                        <Link to="/bible-study" onClick={handleLinkClick} className={`a ${menu === 'bible-study' ? 'active' : ''}`}>Bible-Study</Link><hr className="hrr" />
                    </li>
                    <li className='menu-option' onClick={() => setMenu('q&a')}>
                        <Link to="/q&a" onClick={handleLinkClick} className={`a ${menu === 'q&a' ? 'active' : ''}`}>Q&A</Link><hr className="hrr" />
                    </li>
                    <li className='menu-option' onClick={() => setMenu('about')}>
                        <Link to="/about" onClick={handleLinkClick} className={`a ${menu === 'about' ? 'active' : ''}`}>About Us</Link><hr className="hrr" />
                    </li>
                </ul>
            </div>
            <div className="h-container">
                <div className="hamburger_container">
                    <button className="hamburger" onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                    </button>
                </div>
                <h3 className="nav_logo"><img src={logo} width={30} alt="" />
                 AGAKIZA NIKI?
                </h3>
                <div className="menu">
                <Link className="one-dis" to="/contact" onClick={() => setMenu('contact')}><button  className="button">Contact</button></Link>
                    <ul className='nav-item'>
                        <li onClick={() => setMenu('home')}>
                            <Link to="/" onClick={handleLinkClick} className={`a ${menu === 'home' ? 'active' : ''}`}>Home</Link><hr className="hrr" />
                        </li>
                        <li onClick={() => setMenu('podcast')}>
                            <Link to="/podcast" onClick={handleLinkClick} className={`a ${menu === 'podcast' ? 'active' : ''}`}>Podcast</Link><hr className="hrr" />
                        </li>
                        <li onClick={() => setMenu('sermons')}>
                            <Link to="/sermons" onClick={handleLinkClick} className={`a ${menu === 'sermons' ? 'active' : ''}`}>Sermons</Link><hr className="hrr" />
                        </li>
                        <li onClick={() => setMenu('bible-study')}>
                            <Link to="/bible-study" onClick={handleLinkClick} className={`a ${menu === 'bible-study' ? 'active' : ''}`}>Bible-Study</Link><hr className="hrr" />
                        </li>
                        <li onClick={() => setMenu('q&a')}>
                            <Link to="/q&a" onClick={handleLinkClick} className={`a ${menu === 'q&a' ? 'active' : ''}`}>Q&A</Link><hr className="hrr" />
                        </li>
                        <li onClick={() => setMenu('about')}>
                            <Link to="/about" onClick={handleLinkClick} className={`a ${menu === 'about' ? 'active' : ''}`}>About Us</Link><hr className="hrr" />
                        </li>
                    </ul>
                </div>
                <Link to="/contact" onClick={() => setMenu('contact')}><button className="onee button">Contact</button></Link>
            </div>
        </section>
    );
};

export default Navbar;
