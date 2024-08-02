import React, { useEffect } from 'react';
import './click.css';

function Click() {

    useEffect(()=>{
      const cursorAnimation=document.querySelector(".cursor");
    const cursors=document.querySelectorAll(".cursor");
    document.addEventListener("click",(e)=>{
        let x=e.clientX;
        let y=e.clientY;

        cursorAnimation.style.top=y+"px";
        cursorAnimation.style.left=x+"px";

        cursors.forEach((cursor)=>{
            cursor.classList.add("active");

            function removeActive(){
                cursor.classList.remove("active");
            }

            setTimeout(removeActive,1000);
        })

        let cursorClone=cursorAnimation.cloneNode(true);
        document.querySelector("body").appendChild(cursorClone);

        setTimeout(()=>{
            cursorClone.remove();
        },1000);        
    });

    })
  return (
    <div className='cursor'>
      <div className="clickAnim"> 
        <div className="shape circle big"></div>
        <div className="shape circle small"></div>
        <div className="shape triangle yellow"></div>
        <div className="shape triangle green"></div>
        <div className="shape sideCircle"></div>
      </div>
    </div>
  )
}

export default Click
