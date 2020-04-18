import React from "react";
import Header from "./main/Header";
import About from "./about/About";
import Footer from "./main/Footer";
import Home from "./home/Home"
import Skills from "./skills/Skills";
import AdditionalInfo from "./additional/AdditionalInfo"

function App() {

    return (
        <div>
            <Header />
            <Home />
            <AdditionalInfo />
            <About />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;