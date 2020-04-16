import React from "react";
import Name from "./Name"
import DownloadBtn from "../buttons/DownloadBtn";
import GooglePlayBtn from "../buttons/GooglePlayBtn";
import Social from "./Social";

function Home() {

    return (
        <div className="home">

            <Social />

            <div className="home-left">
                <Name />
                <div className="home-left-job">
                    <h2><strong>Android Developer</strong></h2>
                </div>

                <div className="home-left-description">
                    <p>I am an enthusiastic Android and Junior Web developer who is keen on</p>
                    <p>learning and working with friendly team.</p>
                </div>

                <div className="home-left-buttons">
                    <DownloadBtn />
                    <GooglePlayBtn />
                </div>

            </div>

            <div className="home-right">

            </div>

        </div>
    )
}

export default Home;