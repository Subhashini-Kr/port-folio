import React, { useEffect } from 'react';
import Home from '../home';
import './beaker.css';

function Beaker() {

    useEffect(()=>{
      let progress=document.getElementById('progressbar');
    let totalHeight=document.body.scrollHeight-window.innerHeight;
    window.onscroll=function(){
        let progressHeight=(window.pageYOffset/totalHeight)*100;
        progress.style.height=progressHeight+"%";
    }
    })

  return (
    <div className='beaker' style={{color:"white"}}>
      <div id="progressbar"></div>
      <div id="scrollpath"></div>
      <Home/>
    </div>
  )
}

export default Beaker
