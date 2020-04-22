import React from "react";
import SingleProject from "./SingleProject";
import myProjects from "./myProjects";

function PersonalProjects() {

    return (
        // <div style={{textAlign:"center"}}>
        <div className="projects-container">
            <div className="projects-title">
                <p>Projects</p>
            </div>

            <div className="projects-row">
                <SingleProject
                    aProject={myProjects[0]}
                    aPercent="70%"
                />

                <SingleProject
                    aProject={myProjects[2]}
                    aPercent="40%"
                />

                <SingleProject
                    aProject={myProjects[3]}
                    aPercent="40%"
                />

                <SingleProject
                    aProject={myProjects[1]}
                    aPercent="70%"
                />
            </div>

        </div>
        // </div>
    )
}

export default PersonalProjects;