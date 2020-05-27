import React, { useState, useEffect } from "react";
import Header from "./main/Header";
import Footer from "./main/Footer";
import Home from "./home/Home"
import About from "./about/About";
import Skills from "./skills/Skills";
import AdditionalInfo from "./additional/AdditionalInfo";
import Achievements from "./achievements/Achievements";
import Posts from "./posts/Posts";
import ContactMe from "./contactme/ContactMe";
import PersonalProjects from "./projects/PersonalProjects";
import axios from "axios";
import urls from "../urls";

function App() {

    const [isUpdate, setIsUpdate] = useState(0);
    const [cvLink, setCvLink] = useState("https://firebasestorage.googleapis.com/v0/b/who-is-khamidjon.appspot.com/o/cv%2FKhamidjon_Khamidov.pdf?alt=media&token=871b3ce1-b584-4b07-a52a-7adb88f7c40f");

    useEffect(() => {
    
        axios.get(urls.BASE_SERVER_URL + "/someone/shouldupdate/" + escape(window.navigator.platform))
            .then(res => {
                if (res.status !== 404)
                    setIsUpdate(res.data[0].is_update);
                    setCvLink(res.data[0].cv_link);
            })
            .catch(err => {})
    }, [])

    return (
        <div>
            <Header />
            <div style={{ paddingTop: "55px" }}>
                <section id="sectionhome">
                    <Home 
                        cv_link={cvLink}
                    />
                </section>


                <AdditionalInfo />


                <section id="sectionabout">
                    <About 
                        shouldUpdate={isUpdate}
                    />
                </section>

                <section id="sectionskills">
                    <Skills 
                        shouldUpdate={isUpdate}
                    />
                </section>

                <section id="sectionachievements">
                    <Achievements 
                        shouldUpdate={isUpdate}
                    />
                </section>

                <section id="sectionpersonalprojects">
                    <PersonalProjects 
                        shouldUpdate={isUpdate}
                    />
                </section>

                <section id="sectionposts">
                    <Posts
                        shouldUpdate={isUpdate}
                    />
                </section>

                <section id="sectioncontactme">
                    <ContactMe 
                        shouldUpdate={isUpdate}
                    />
                </section>

                <Footer />
            </div>

        </div>
    );
}

export default App;
