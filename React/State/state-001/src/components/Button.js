import React from "react";

const Button = ({ body_title, postDate, thoughts_para }) => {
  return (
    <div className="App">
      <div className="body-container">
        <h2>{body_title}</h2>
        <p
          style={{
            fontStyle: "italic",            
            fontSize: "18px"
          }}
        >
          {postDate}
        </p>
        
        <p
          style={{
            fontSize: "18px"
          }}
        >
          {thoughts_para}
        </p>
        {/* <br /> */}
      </div>
    </div>
  );
};

export default Button;