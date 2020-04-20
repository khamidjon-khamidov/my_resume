import React from "react";

function ContactMe() {

    return (
        <div className="contactme-container">

            <div className="contactme-title">
                <p>Contact Me</p>
            </div>

            <div className="contactme-bottom-cont">
                {/* left */}
                <div className="column contact-left">
                    <p>Contact Details</p>
                </div>

                {/* right */}
                <div className="column contact-right">
                    <p>Test</p>
                </div>
            </div>

        </div>
    )
}

export default ContactMe;