import React from "react";

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">

                <a class="navbar-brand" href="">Khamidjon</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#pricing">Skills</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Achievements</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Posts</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Contact</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Posts</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Login</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#cta">Sign In</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    );
}

export default Header;