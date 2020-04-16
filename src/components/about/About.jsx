import React from "react";
import AboutMeDetail from "../about/Left/AboutDetail";
import GooglePlayBtn from "../buttons/GooglePlayBtn"
import AboutMePicture from "../about/Right/AboutMePicture";
import DownloadBtn from "../buttons/DownloadBtn";

function About() {

    return (
        <div className="about-container">
            <div className="about-frst-part-container">
                <h1>Khamidjon Khamidov</h1>
               
                <h3>I am an Android and Web developer who is keen on learning and creating amazing projects.</h3>
               
                <AboutMeDetail />

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <GooglePlayBtn />
                    <DownloadBtn />
                </div>
            </div>

            <div className="about-scond-part-container">
                <AboutMePicture />
            </div>
        </div>
    );
}

export default About;