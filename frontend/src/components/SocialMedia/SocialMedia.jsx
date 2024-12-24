import React from 'react';
import './SocialMedia.css';
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
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtube} width={40} alt="YouTube" />
          </a>
          <a href="https://chat.whatsapp.com/JKdXHXHIbcpCDxVLfNV2Mt" target="_blank" rel="noopener noreferrer">
            <img src={whastap} width={40} alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} width={40} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
