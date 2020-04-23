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

function App() {

    const [isUpdate, setIsUpdate] = useState("NO");

    useEffect(() => {
        axios.get("http://localhost:9000/someone/shouldupdate")
            .then(res => {
                if (res.status !== 404)
                    // console.log("is_update = " + res.data[0].is_update)
                    setIsUpdate(res.data[0].is_update)
            })
            .catch(err => {})
    }, [])

    return (
        <div>
            <Header />
            <div style={{ paddingTop: "55px" }}>
                <section id="sectionhome">
                    <Home />
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