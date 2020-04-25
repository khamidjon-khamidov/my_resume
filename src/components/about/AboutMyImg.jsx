import React from "react";
import aboutMeDetails from "./aboutMeDetails";

function AboutMyImg() {

    return (
        <div className="about-my-img-container">
            <img className="about-my-img" src={aboutMeDetails.pictureLink} alt="about my image"/>
            
        </div>
    )
}

export default AboutMyImg;