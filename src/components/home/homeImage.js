import React from 'react';
import subbu from '../../images/home/subbu.png';
import './homeImage.css';

function HomeImage() {
  return (
    <div>
      <div className="homeImage">
        <img src={subbu} alt="subbu.jpg" />
      </div>
    </div>
  )
}

export default HomeImage
