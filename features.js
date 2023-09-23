import React from "react";
import "./features.css";
import healthcare from "./healthcare.jpg";
import wealthcare from "./wealthcare.jpg";

const Features=() => {
    return(
        <div className="outermost-container">
            <div className="title"><h1>OUR FEATURES</h1></div>
            <div className="outer-container">
                <div className="inner-container healthcare">
                    <img src={healthcare} alt="healthcare" width={300} height={300}></img>
                    <button className="hc">HEALTHCARE</button>
                    <p className="feature-description">We will provide you the right cure</p>
                </div>
                <div className="inner-container wealthcare">
                    <img src={wealthcare} alt="wealthcare" width={300} height={300}></img>
                    <button className="wc">WEALTHCARE</button>
                    <p className="feature-description">We will provide you the right financial plan</p>
                </div>
            </div>
        </div>
    );
}

export default Features;

