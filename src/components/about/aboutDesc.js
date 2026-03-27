import React from 'react';
import './aboutDesc.css';
import contactPic from '../../images/contactPic.png';
import ContactCard from '../contact/contactCard';
import Tech from './tech';
import bmrc from '../../images/about/bmrc.png';
import ohio from '../../images/about/ohio.png';
import narayana from '../../images/about/narayana.png';

function AboutDesc() {
  return (
    <div className="about">
    <div className='aboutDesc'>
        <div className="aboutPic">
            <img src={contactPic} alt="aboutpic.png" />
        </div>
        <div className="aboutText">
            <div className="aboutHead">
                <div className="aboutHeadA">
                    S
                </div>
                <div className="aboutHeadTitle">
                    <div className="aboutMe">
                        lice of Life :
                    </div>
                    <div className="subbu">
                        ubhashini
                    </div>
                </div>
            </div>
            <p className="aboutBody">
                Hello, nice to meet you!<br />
                As a dedicated <b>B.Sc. Nursing Graduate</b>, I am eager to enhance my clinical skills and contribute to <b>patient care excellence</b>. I am committed to upholding high standards of compassionate care and aim to gain hands-on experience in a dynamic healthcare environment. <br />My focus is on <b>refining critical thinking, developing adaptability, and collaborating with interdisciplinary teams</b> to impact patient outcomes positively. By embracing evidence-based practices, I strive to contribute to the advancement of healthcare practices.<br /><br />
                <b>Languages: </b>English (Profficient), Hindi (Native), Bengali (Basic)
            </p>
            <div className='downloadResume'>
                <button>
                    <a href='https://drive.google.com/file/d/1TATayXf1RTiJpFNMTg6IpUXufG8nfxiu/view' target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </button>
            </div>
        </div>
    </div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <ContactCard link='https://share.google/TNBuqyjhovsMQ0gGl' site='R.K College of Nursing' points={['B.Sc. Nursing Graduate', '2021-2025', '3x 3-Months Trainee']} />
        {/* <ContactCard link='https://www.surajkundinternational.com/' site='Surajkund International School' points={['2020 Passout', 'PCB Student' ]} /> */}
    </div></div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <a href='https://drive.google.com/file/d/1ZmU0O6j84PmctfjRhBM3u5vtU5lt9_pO/view' target="_blank" rel="noreferrer">
            <Tech icon={narayana} field="Narayana Hospital" content="Completed a 3-month clinical training (2025) across ICU, General, and Emergency wards as a Trainee." />
        </a>
        <Tech icon={bmrc} field="BMRC Hospital" content="Trained under ICCU and CCU wards over a span of 3 months (2024) as Trainee." />
        <Tech icon={ohio} field="OHIO Hospital" content="Worked as Trainee for 3 months in 2023. Trained under Emergency, ICU, General and Swasth-Sathi wards." />
        {/* <Tech icon="fa-solid fa-robot" field="AI (ML & DL)" content="Have Deep insights of various topics related to ML & DL. Always have dived deep into the advanced concepts and mathematical point of view of DL, which explains the WHY and HOW of the concepts." /> */}
    </div></div>
    </div>
  )
}

export default AboutDesc
