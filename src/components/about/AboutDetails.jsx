import React, { useState } from "react";
import aboutMeDetails from "./aboutMeDetails";
import AboutMyInterests from "./AboutMyInterests";


function calculateExperience() {
    var startDate = new Date("2/Sep/2017 08:00:00");
    var currentDate = new Date();

    var diff = currentDate.getTime() - startDate.getTime();
    var years = Math.floor(diff / 1000 / 24 / 60 / 60 / 30 / 12); diff -= years * (1000 * 24 * 60 * 60 * 30 * 12);
    var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); diff -= months * (1000 * 24 * 60 * 60 * 30);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24)); diff -= days * (1000 * 60 * 60 * 24);
    var hours = Math.floor(diff / (1000 * 60 * 60)); diff -= hours * (1000 * 60 * 60);
    var mins = Math.floor(diff / (1000 * 60)); diff -= mins * (1000 * 60);
    var seconds = Math.floor(diff / (1000)); diff -= seconds * (1000);

    var hoursStr = ((hours < 10) ? "0" : "") + hours.toString();
    var minsStr = ((mins < 10) ? "0" : "") + mins;
    var secondsStr = ((seconds < 10) ? "0" : "") + seconds;

    return "" + years + " years " + months + " months " + days + " days " +
        hoursStr + ":" + minsStr + ":" + secondsStr
}

function AboutDetails() {

    const [experiencePeriod, setExperiencePeriod] = useState(calculateExperience);

    setInterval(function () {
        setExperiencePeriod(calculateExperience());
    }, 1000);

    function copyToClipboard(someText) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = someText;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }

    const description = "I have been learning programming for about 3 years. Over this period, I have learned Algorithms in C/C++, Android Development in Java/Kotlin and Web development using html, css, javasrcipt, reactjs for frontend and nodejs, mongodb for backend.";

    return (
        <div className="about-details-base-cont">
            <div className="about-details-container">
                <p className="my-intro">My Intro</p>
                <p className="about-me"><strong>About Me</strong></p>

                <p className="about-description">{description}</p>

                {/* about me details */}
                <div className="about-me-info">
                    <p className="my-name"><i class="fas fa-user"></i> <strong>Name:</strong> <span>Khamidjon Khamidov</span></p>

                    <p className="my-phone"><i class="fas fa-phone"></i> <strong>Phone:</strong> <span
                        onClick={() => copyToClipboard(aboutMeDetails.phone)}
                        style={{ cursor: "pointer" }}>{aboutMeDetails.phone}</span></p>

                    <p className="my-email"><i class="fas fa-envelope"></i> <strong>Email:</strong> <span
                        onClick={() => copyToClipboard(aboutMeDetails.phone)}
                        style={{ cursor: "pointer" }}
                    >{aboutMeDetails.email}</span></p>

                    <p className="my-address"><i class="fas fa-address-card"></i> <strong>Address:</strong> <span>{aboutMeDetails.address}</span></p>

                    <p className="my-address"><i class="fas fa-graduation-cap"></i> <strong>Education:</strong> <a href={aboutMeDetails.education[0].link}>{aboutMeDetails.education[0].name}</a> <span>and</span> <a href={aboutMeDetails.education[1].link}>{aboutMeDetails.education[1].name}</a></p>

                    <p className="my-experience"><i class="fas fa-briefcase"></i> <strong>Experience:</strong> <span>{experiencePeriod}</span></p>
                </div>

                {/* my interests */}
                <p className="my-interests"><strong>My Interests</strong></p>
                <AboutMyInterests />
            </div>
        </div>
    )
}

export default AboutDetails;