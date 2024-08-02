import React from "react";
import "./tech.css";

function Tech({icon, field, content}) {
  return (
    <div className="tech">
      <div className="book">
        <div className="book-content">
            {content}
        </div>
        <div className="cover">
          <p>
            <img
              src={icon}
              style={{ height: "4rem" }}
            ></img>
            <br />
            <br />
            {field}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tech;