import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom';
import podcast from '../../assets/podcast.png';
import bible_study from '../../assets/bible_study.png';
import link from '../../assets/link.png';
import sermons from '../../assets/sermons2.png';

const Hero = () => {
  return (
    <section className="page_4" id="projects">
    <div className="title">
    <h1 className="about_me">Join Us </h1>
    </div>
    <div className="divs">
      <Link to={'/podcast'}>
      <div className="div-1">
        <img src={podcast} className="project-img" alt="" />
        <div className="all-inform">
          <div className="name-link">
            <h4>Our Podcast</h4>
            <a href='' className="tooltip-container">
            <img src={link} width={20} alt=""className="img-link" />
            <span className="tooltip-text">Link</span>
            </a>
          </div>
          <p className="pr">Join us to hear the Word of God, reminding everyone that the gospel is our greatest treasure and essential for life.</p>
        </div>
      </div>
      </Link> 

       <Link to={'/sermons'}>
       <div className="div-2">
        <img src={sermons} className="project-img"  alt="" />
        <div className="all-inform">
          <div className="name-link">
          <h4>Sermons</h4>
            <a href='https://food-eco-frontend.onrender.com' className="tooltip-container">
            <img src={link} width={20} alt=""className="img-link" />
            <span className="tooltip-text">Link</span>
            </a>
          </div>
          {/* <div >
          </div> */}
          <p className="pr">Join us for weekly Bible study sessions where we explore God’s Word, gaining understanding and guidance through Scripture.</p>
        </div>
      </div>
       </Link>

       <Link to={'/bible-study'}>
       <div className="div-3">
        <img src={bible_study} className="project-img" alt="" />
        <div className="all-inform1">
          <div className="name-link">
            <h4>Bible Study</h4>
            <a href='https://e-commerce-web-r41q.onrender.com' className="tooltip-container">
            <img src={link} width={20} alt=""className="img-link" />
            <span className="tooltip-text">Link</span>
            </a>
            
          </div>
          <p className="pr">An online clothing store designed to make shopping easy whenever you're in Kigali, providing a convenient way to buy clothes.</p>
        </div>
       </div>
       </Link>
    </div>
  </section>
  )
}

export default Hero
