import React from "react";

function SingleProject(props) {

    const {projectId, projectTime, projectTitle, projectDes, projectLink, projectGitLink} = props.aProject;

    const desStyle = {
        textAlign: "left",
        color: "#56454C",
        fontFamily: "san-serif"
    }

    const iconStyle = {
        display: "inline-block"
    }

    const dateStyle = {
        textAlign: "right",
        color: "#fac100",
        fontSize: "1.8rem",
        lineHeight: "0"
    }

    function onMOut(e){
        document.getElementById(projectId).style.background = "white";
    }

    function onMOver(e){
        document.getElementById(projectId).style.background = "#D3D3D3";
    }

    function onMClick(e){

    }

    return (
        <div 
        id={projectId}
        onMouseOut={onMOut} 
        onMouseOver={onMOver}
        onClick={onMClick}
        className="single-pr-media-item">
            <h1>{projectTitle} <span style={iconStyle}><i className="home-social-icon fab fa-github"></i></span></h1>
            <p style={desStyle}>{projectDes}</p>

            <p style={dateStyle}>{projectTime}</p>
        </div>
    )
}

export default SingleProject;