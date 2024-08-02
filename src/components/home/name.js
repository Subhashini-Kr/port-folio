import React from 'react';
import NameLetter from './nameLetter';
import './name.css';

export default function Name() {
  return (
    <div className='name'>
        <div className="firstName" style={{marginRight:"10px"}}>
      <NameLetter letter="S"/>
      <NameLetter letter="U"/>
      <NameLetter letter="B"/>
      <NameLetter letter="H"/>
      <NameLetter letter="A"/>
      <NameLetter letter="S"/>
      <NameLetter letter="H"/>
      <NameLetter letter="I"/>
      <NameLetter letter="N"/>
      <NameLetter letter="I"/>
      </div>
      <div className="lastName">
      <NameLetter letter="K"/>
      <NameLetter letter="U"/>
      <NameLetter letter="M"/>
      <NameLetter letter="A"/>
      <NameLetter letter="R"/>
      <NameLetter letter="I"/>
      </div>
    </div>
  )
}
