import React from "react";
import Header from "./main/Header";
import About from "./about/About";
import Footer from "./main/Footer";
import Home from "./home/Home"
import AdditionalInfo from "./additional/AdditionalInfo"

function App() {

    return (
        <div>
            <Header />
            <Home />
            <AdditionalInfo />
            <About />
            <Footer />
        </div>
    );
}

export default App;