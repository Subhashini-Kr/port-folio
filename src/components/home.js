import React from 'react';
import Name from './home/name';
import Posts from './home/posts';
import HomeImage from './home/homeImage';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <div className="myIntro">
        <h1 >Hello... My name is</h1>
        <Name/>
        <Posts/>
      </div>
      <div className="myImage">
        <HomeImage/>
      </div>
    </div>
  )
}

export default Home
