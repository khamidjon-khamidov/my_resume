import React, { useState } from "react";
import aboutMeDetails from "./aboutMeDetails";
// import { Popup } from 'semantic-ui-react';

function AboutMeDetail() {

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

        var hoursStr = (hours<10)?"0":"" + hours;
        var minsStr = (mins<10)?"0":"" + mins;
        var secondsStr = (seconds<10)?"0":"" + seconds;

        return "" + years + " years " + months + " months " + days + " days " +
            hoursStr + ":" + minsStr + ":" + secondsStr
    }

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

    return (
        <div className="about-me-detail">
            <h5 style={{ fontFamily: "'Comic Neue', cursice" }}>General Info</h5>
            <h4 className="about-info">Birth Date       </h4>
            <h4 className="about-info-detail">{aboutMeDetails.dateOfBirth}</h4>
            <br />

            <h4 className="about-info">Address          </h4>
            <h4 className="about-info-detail">{aboutMeDetails.address}</h4>
            <br />

            <h4 className="about-info">Email              </h4>
            <h4
                onClick={() => copyToClipboard(aboutMeDetails.email)}
                className="about-info-detail"
                style={{ cursor: "pointer" }}
            >{aboutMeDetails.email}
            </h4>
            <br />

            <h4 className="about-info">Education       </h4>
            <h4
                className="about-info-detail-link"
            >
                <a href={aboutMeDetails.education[0].link}>{aboutMeDetails.education[0].name}</a> <span>and</span> <a href={aboutMeDetails.education[1].link}>{aboutMeDetails.education[1].name}</a>
            </h4>
            <br />

            <h4 className="about-info">Phone             </h4>
            <h4
                onClick={() => copyToClipboard(aboutMeDetails.phone)}
                className="about-info-detail"
                style={{ cursor: "pointer" }}
            >{aboutMeDetails.phone}</h4>
            <br />

            <h4 className="about-info">Hobbies          </h4>
            <h4 className="about-info-detail">{aboutMeDetails.hobbies}</h4>
            <br />

            <h4 className="about-info">Experience      </h4>
            <h4 className="about-info-detail">{experiencePeriod}</h4>
            <br />
        </div>
    )
}

export default AboutMeDetail;