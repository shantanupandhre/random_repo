import React from "react";
import elderlyCare from "./elderly-care.jpg";
import "./bigDiv.css";
import description from "./description.png";

const bigDiv=() => {
    return (
        <div className="bigImg">
            <img src={elderlyCare} alt="elderly-care" className="bigImage1"></img>
            <img src={description} alt="description" className="bigImage2"></img>
        </div>
    );
}

export default bigDiv;