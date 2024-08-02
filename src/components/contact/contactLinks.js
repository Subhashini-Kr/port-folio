import React from 'react';
import './contactLinks.css';
// import contactPic from '../../images/pic.png';

function ContactLinks() {
  return (
    <div className='contactLinks'>
      <div className="contact-text">
        <h1>Feel free to contact me...</h1>
        <div className="contact-cards">
        {/* <a href="https://www.facebook.com/profile.php?id=61551226064151" target="_blank" rel="noreferrer">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-facebook-f"></span>
            </div>
            <div className="text">
               Facebook
            </div>
         </a> */}
         {/* <a href="https://github.com/Ankit-Kumar-8700" target="_blank" rel="noreferrer">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-github"></span>
            </div>
            <div className="text">
               GitHub
            </div>
         </a> */}
         <a href="https://www.instagram.com/subhashini.08/" target="_blank" rel="noreferrer">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-instagram"></span>
            </div>
            <div className="text">
               Instagram
            </div>
         </a>
         <a href="https://www.linkedin.com/in/subhashini-kumari-aaa8aa26b/" target="_blank" rel="noreferrer">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-linkedin-in"></span>
            </div>
            <div className="text">
               Linkedin
            </div>
         </a>
        </div>
      </div>
      {/* <div className="contactPic">
        <img src={contactPic} alt="contactMe" />
      </div> */}
    </div>
  )
}

export default ContactLinks
