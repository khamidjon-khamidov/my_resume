import React from "react";
import AboutMyImg from "./AboutMyImg";
import AboutDetails from "./AboutDetails";

function About(props) {

    return (
        <div className="about-container">
           <AboutMyImg />
           <AboutDetails
            shouldUpdate={props.shouldUpdate} /> 

        </div>

    );
}

export default About;