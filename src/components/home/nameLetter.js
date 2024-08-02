import React from 'react';

function NameLetter(props) {
  return (
    <div className='nameLetter'>
      <p className={props.letter}>{props.letter}</p>
    </div>
  )
}

export default NameLetter

