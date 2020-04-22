import React from "react";

function SingleProject(props) {

    const {projectId, projectTime, projectTitle, projectDes, projectLink, projectGitLink} = props.aProject;

    const contStyle = {
        position: "relative",
        flex: props.aPercent,
        maxWidth: "70%",
        padding: "0 1%",
        margin: "10px",
        background: "white",
        justifyContent:"space-around",
        WebkitBoxShadow: "0px 0px 5px 2px rgba(0,0,0,0.35)",
        MozBoxShadow: "0px 0px 5px 2px rgba(0,0,0,0.35)",
        boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.35)",
        borderRadius: "10px",
        transition: "background 1s ease-in-out",
        cursor: "pointer"
    }

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
        style={contStyle} 
        className="single-pr-media-item">
            <h1>{projectTitle} <span style={iconStyle}><i className="home-social-icon fab fa-github"></i></span></h1>
            <p style={desStyle}>{projectDes}</p>

            <p style={dateStyle}>{projectTime}</p>
        </div>
    )
}

export default SingleProject;