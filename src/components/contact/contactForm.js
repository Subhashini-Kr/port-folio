import React from 'react';
import './contactForm.css';
import stars1 from '../../images/stars1.png';
import stars2 from '../../images/stars2.png';
import stars3 from '../../images/stars3.png';
import stars4 from '../../images/stars4.png';
import stars5 from '../../images/stars5.png';

function ContactForm() {

  return (
    <div className='contactForm'>
        <div className="contactFormSmiley">
        <div className="contactWrapper">
        <input type="radio" name="rate" id="star-1" checked />
    <input type="radio" name="rate" id="star-2" checked />
    <input type="radio" name="rate" id="star-3" checked />
    <input type="radio" name="rate" id="star-4" checked />
    <input type="radio" name="rate" id="star-5" />
            <div className="contactContent">
                <div className="contactOuter">
                    <div className="contactEmojis">
                        <li className='slideImg'><img src={stars1} alt="1star.png" /></li>
                        <li><img src={stars2} alt="2star.png" /></li>
                        <li><img src={stars3} alt="3star.png" /></li>
                        <li><img src={stars4} alt="4star.png" /></li>
                        <li><img src={stars5} alt="5star.png" /></li>
                    </div>
                </div>
                <div className="contactStars">
                    <label htmlFor="star-1" className='star-1 fas fa-star'></label>
                    <label htmlFor="star-2" className='star-2 fas fa-star'></label>
                    <label htmlFor="star-3" className='star-3 fas fa-star'></label>
                    <label htmlFor="star-4" className='star-4 fas fa-star'></label>
                    <label htmlFor="star-5" className='star-5 fas fa-star'></label>
                </div>
            </div>
            <div className="contactFooter">
                <span className="contactClass"></span>
                <span className="contactStarsNumber"></span>
            </div>
        </div>
    </div>
    <div className="formContainer">
  <form action="mailto:subhashinisk99915@gmail.com" method="get" encType="text/plain">

    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="title">Title</label>
    <input type="text" id="title" name="title" placeholder="Your title.."/>

    <label htmlFor="country">Country</label>
    <input type="text" id="country" name="country" placeholder="Country name.."/>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"100px"}}></textarea>

    <input type="submit" className='button' value="Submit"/>
    <input type="reset" className='button' value="Clear"/>

  </form>
</div>
    </div>
  )
}

export default ContactForm
