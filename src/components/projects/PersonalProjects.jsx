import React, { useState, useEffect } from "react";
import SingleProject from "./SingleProject";
import myProjects from "./myProjects";
import axios from "axios"
import urls from "../../urls"

function PersonalProjects(props) {

    const [projects, setProjects] = useState(myProjects);

    useEffect(() => {
        if (props.shouldUpdate > 0) {
            axios.get(urls.BASE_SERVER_URL + "/someone/projects")
                .then(res => {
                    // console.log(projects)
                    // console.log(res.data[0])
                    if (res.status !== 404)
                        setProjects(res.data)
                })
                .catch(err => { })
        }
    }, [props.shouldUpdate])

    return (
        <div className="projects-container">
            <div className="projects-title">
                <p>Projects</p>
            </div>

            <div className="projects-row">

                {projects.map(value => (
                    <SingleProject
                        key={value.projectId+"key"}
                        aProject={value}
                    />
                ))}
            </div>

        </div>
        // </div>
    )
}

export default PersonalProjects;