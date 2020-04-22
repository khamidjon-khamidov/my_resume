import React, { useState } from "react";
import Header from "./main/Header";
import About from "./about/About";
import Footer from "./main/Footer";
import Home from "./home/Home"
import Skills from "./skills/Skills";
import AdditionalInfo from "./additional/AdditionalInfo";
import Achievements from "./achievements/Achievements";
import Posts from "./posts/Posts";
import ContactMe from "./contactme/ContactMe";
import PersonalProjects from "./projects/PersonalProjects";


function App() {

    return (
        <div>
            <Header />
            <div style={{paddingTop: "55px"}}>
                <section id="sectionhome">
                    <Home />
                </section>


                <AdditionalInfo />


                <section id="sectionabout">
                    <About />
                </section>

                <section id="sectionskills">
                    <Skills />
                </section>

                <section id="sectionachievements">
                    <Achievements />
                </section>

                <section id="sectionpersonalprojects">
                    <PersonalProjects />
                </section>

                <section id="sectionposts">
                    <Posts />
                </section>

                <section id="sectioncontactme">
                    <ContactMe />
                </section>

                <Footer />
            </div>

        </div>
    );
}

export default App;