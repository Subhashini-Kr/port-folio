import React from 'react'
import './skill.css'

function Skill({skill,percentage}) {
  return (
    <div className="progress-bar-container">
  
  <style>
        {`
        .system:hover .${skill} {
          box-shadow: 5px 5px 50px white;
        }
        .system:hover .satellite {
          box-shadow: 5px 5px 15px white;
        }
        .progress-bar-container .${skill} {
          background: linear-gradient(-30deg, white, black,black);
          animation: progress${percentage} 2s 1 forwards;
          
          transition: all 0.5s;
          box-shadow: -2px -2px 5px white;
        }
        .satellite-${skill}{
          background: linear-gradient(60deg, white,black,black);
          box-shadow: 2px 2px 5px white;
        }
        `}
      </style>

  <div className="orbit-system">
  <div className="system">
    <div className="satellite-orbit">
      <div className={`satellite satellite-${skill}`}></div>
    </div>
  <div className={`progress-bar ${skill} planet`}>
  <h2>
    <label className={`h2${skill}`} htmlFor={skill}>{skill}</label>
  </h2>
      {/* <img src={image} alt={`${skill}.png`} /> */}
  </div>
  </div>
</div>

</div>
  )
}

export default Skill
