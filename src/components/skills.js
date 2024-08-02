import React from "react";
import "./skills.css";
import Skill from "./skills/skill";

// import js from '../images/skills/js.png';
// import reactjs from '../images/skills/reactjs.png';

// import mongodb from '../images/skills/mongodb.png';
// import mysql from '../images/skills/mysql.png';

// import numpy from '../images/skills/numpy.png';
// import pandas from '../images/skills/pandas.png';
// import seaborn from '../images/skills/seaborn.png';
// import matplotlib from '../images/skills/matplotlib.png';
// import scikit from '../images/skills/scikit.png';

// import tensorflow from '../images/skills/tensorflow.png';
// import nltk from '../images/skills/nltk.png';
// import opencv from '../images/skills/opencv.png';

// import c from '../images/skills/c.png';
// import cpp from '../images/skills/cpp.png';
// import python from '../images/skills/python.png';

// import tableau from '../images/skills/tableau.png';
// import powerbi from '../images/skills/powerbi.png';

function Skills() {
  return (
    <div className="skills">
      <div className="skill-section">
        
      <div className="heading">
        <h1>My Wards...</h1>
        </div>
      <ul>
        <Skill skill='ICU' percentage='90'  />
        <Skill skill='General' percentage='80' />
        <Skill skill='Emergency' percentage='70' />
        <Skill skill='Swasth-Sathi' percentage='70' />
      </ul>
      <ul>
        <Skill skill='ICCU' percentage='70' />
        <Skill skill='CCU' percentage='80' />
      </ul>
    </div>
    </div>
  );
}

export default Skills;
