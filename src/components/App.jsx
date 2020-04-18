import React from "react";
import Header from "./main/Header";
import About from "./about/About";
import Footer from "./main/Footer";
import Home from "./home/Home"
import Skills from "./skills/Skills";
import AdditionalInfo from "./additional/AdditionalInfo"
import Achievements from "./achievements/Achievements";

function App() {

    return (
        <div>
            <Header />
            <Home />
            <AdditionalInfo />
            <About />
            <Skills />
            <Achievements />
            <Footer />
        </div>
    );
}

export default App;