// src/basics/ClickEvent.js

import React, { useState } from "react";

import "./ClickEvent.css"; // Import CSS for styling



function ClickEvent() {

  const [message, setMessage] = useState("Click the button to see magic!");



  const handleClick = () => {

    setMessage("Button Clicked! 🎉");

    // Alternatively: alert("Button Clicked!");

  };



  return (

    <div className="click-event-container">

      <h2>{message}</h2>

      <button className="click-btn" onClick={handleClick}>

        Click Me

      </button>

    </div>

  );

}



export default ClickEvent;