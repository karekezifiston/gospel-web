import React from 'react'
import "./SocialMedia.css"
import youtube from '../../assets/youtube.png';
import whastap from '../../assets/whastap.png';
import instagram from '../../assets/instagram.png';

const SocialMedia = () => {
  return (
    <div className='social-media'>
        <div className='straight-line'>
            <div className='line-title'>
                <hr />
                <h1>Join Us Online</h1>
            </div>
            <div className='socials'>
               <a href=""> <img src={youtube}width={40} alt="" /></a>
               <a href=""> <img src={whastap}width={40} alt="" /></a>
                <a href=""><img src={instagram}width={40} alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}

export default SocialMedia
