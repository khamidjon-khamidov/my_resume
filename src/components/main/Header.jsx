import React from "react";

function Header() {

    function onMouseLogoOver(){
        document.getElementById("myLogo").src = "../img/kk_logo_clicked.png";
    }

    function onMouseLogoOut(){
        console.log("on mouse out");
        document.getElementById("myLogo").src = "../img/kk_logo.png";
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">

                <a onMouseOut={onMouseLogoOut} onMouseOver={onMouseLogoOver} className="navbar-brand" href=""><img className="logo" id="myLogo" src="/img/kk_logo.png" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#sectionhome">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectionabout">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectionskills">Skills</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectionachievements">Achievements</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectionpersonalprojects">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectionposts">Posts</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sectioncontactme">Contact</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </header>
    );
}

export default Header;