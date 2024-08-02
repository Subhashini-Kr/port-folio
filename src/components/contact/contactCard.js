import React from 'react';
import './contactCard.css';

function ContactCard({link,site,points}) {
  return (
    <div className="contactCard">
    <div className="card">
  <div className="card-info">
    <p className="title"><a href={link} target="_blank" rel="noreferrer">{site}</a></p>
    <ul>
      {points.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  </div>
</div>
</div>
  )
}

export default ContactCard
