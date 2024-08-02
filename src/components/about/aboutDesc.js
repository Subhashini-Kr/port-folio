import React from 'react';
import './aboutDesc.css';
import contactPic from '../../images/contactPic.png';
import ContactCard from '../contact/contactCard';
import Tech from './tech';
import bmrc from '../../images/about/bmrc.png';
import ohio from '../../images/about/ohio.png';

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
                        ubbu...
                    </div>
                </div>
            </div>
            <p className="aboutBody">
                Hello, nice to meet you!<br />
                As a dedicated <b>B.Sc. Nursing student</b>, I am eager to enhance my clinical skills and contribute to <b>patient care excellence</b>. I am committed to upholding high standards of compassionate care and aim to gain hands-on experience in a dynamic healthcare environment. <br />My focus is on <b>refining critical thinking, developing adaptability, and collaborating with interdisciplinary teams</b> to impact patient outcomes positively. By embracing evidence-based practices, I strive to contribute to the advancement of healthcare practices.<br /><br />
                <b>Languages: </b>English (Profficient), Hindi (Native)
            </p>
        </div>
    </div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <ContactCard link='https://kolkatainstituteofnursing.in/b-sc-nursing/' site='Kolkata Institute of Nursing' points={['3rd Year B.Sc. Student', '2021-2025', '2x 3-Months Trainee']} />
        {/* <ContactCard link='https://www.surajkundinternational.com/' site='Surajkund International School' points={['2020 Passout', 'PCB Student' ]} /> */}
    </div></div>
    <div className="aboutSliderOuter">
    <div className="aboutSlider">
        <Tech icon={ohio} field="OHIO Hospital" content="Worked as Trainee for 3 months in 2023. Trained under Emergency, ICU, General and Swasth-Sathi wards." />
        <Tech icon={bmrc} field="BMRC Hospital" content="Trained under ICCU and CCU wards over a span of 3 months (2024) as Trainee." />
        {/* <Tech icon="fa-solid fa-robot" field="AI (ML & DL)" content="Have Deep insights of various topics related to ML & DL. Always have dived deep into the advanced concepts and mathematical point of view of DL, which explains the WHY and HOW of the concepts." /> */}
    </div></div>
    </div>
  )
}

export default AboutDesc
