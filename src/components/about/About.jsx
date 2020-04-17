import React from "react";
import AboutBackgrImg from "./AboutBackgrImg";
import AboutMyImg from "./AboutMyImg";
import AboutDetails from "./AboutDetails";



function About() {

    return (
        <div className="about-container">
           <AboutBackgrImg />
           <AboutMyImg />
           <AboutDetails />
        </div>
    );
}

export default About;