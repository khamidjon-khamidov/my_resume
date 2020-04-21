import React from "react";
import contactInfo from "./contactInfo";
import ContactItem from "./ContactItem";
import aboutMeDetails from "../about/aboutMeDetails";
import InputForm from "./InputForm";
import Bounce from 'react-reveal/Bounce';

function ContactMe() {

    return (
        <div>
            <Bounce bottom cascade>
                <div className="contactme-container">

                    <div className="contactme-title">
                        <p>Contact Me</p>
                    </div>

                    <div className="contactme-bottom-cont">
                        {/* left */}
                        <div className="column contact-left">
                            <h1 className="in-title">{contactInfo.title}</h1>
                            <p>{contactInfo.des1}</p>
                            <br />
                            <p>{contactInfo.des2}</p>

                            <ContactItem
                                itemId="addressIDD"
                                itemIcon="fas fa-map-marker-alt"
                                itemTitle="Address"
                                itemDes={aboutMeDetails.address}
                            />

                            <ContactItem
                                itemId="phoneIDD"
                                itemIcon="fas fa-phone-alt"
                                itemTitle="Phone"
                                itemDes={aboutMeDetails.phone}
                            />

                            <ContactItem
                                itemId="emailIDD"
                                itemIcon="far fa-envelope"
                                itemTitle="Email"
                                itemDes={aboutMeDetails.email}
                            />
                        </div>

                        {/* right */}
                        <div className="column contact-right">
                            <h1 className="in-title">Send Message</h1>
                            <InputForm />
                        </div>
                    </div>

                </div>

            </Bounce>
        </div>
    )
}

export default ContactMe;