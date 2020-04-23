import React from "react";
import Name from "./Name"
import DownloadBtn from "../buttons/DownloadBtn";
import GooglePlayBtn from "../buttons/GooglePlayBtn";
import Social from "./Social";
import MyPicture from "./right/MyPicture";

function Home(props) {

    return (
        <div className="home">

            <Social />

            <div className="home-left">
                <Name />
                <div className="home-left-job">
                    <h2><strong>Android Developer</strong></h2>
                </div>

                <div className="home-left-description">
                    <p>I am an enthusiastic Android and Junior Web Developer who is keen on learning and working with a friendly team.</p>
                </div>

                <div className="home-left-buttons">
                    <DownloadBtn 
                        cv_link={props.cv_link}
                    />
                    <GooglePlayBtn />
                </div>

            </div>

            <div className="home-right">
                <MyPicture />
            </div>

        </div>
    )
}

export default Home;