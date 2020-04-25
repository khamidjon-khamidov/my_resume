import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";

function SingleAchievement(props) {

    const {itemId, itemTitle, itemDescription, itemLink} = props.item;

    let textAreaId = itemId + "txtarea";
    let backgrId = itemId + "backgr";

    const containerStyle = {
        textAlign: "center",
        position: "relative",
        flex: "1 0 100px",
        margin: "10px",
        borderStyle: "groove",
        borderColor: "#fac100",
        transition: "background 0.4s ease-in-out",
        WebkitBoxShadow: "0px 0px 21px -5px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "0px 0px 21px -5px rgba(0, 0, 0, 0.75)",
        boxShadow: "0px 0px 21px -5px rgba(0, 0, 0, 0.75)"

    }

    const imgContStyle = {
        width: "100%",
        background: "white"
    }

    const txtContStyle = {
        position: "relative",
        background: "white",
        lineHeight: "0.4",
        padding: "2% 0 0 1%",
        borderStyle: "groove none none none",
        borderColor: "#fac100",
        color: "#a600ff",
        fontSize: "1.5rem",
        fontFamily: "'Hi Melody', cursive",
        bottom: "0",
        zIndex: "2",
        transition: "background 0.4s ease-in-out"
    }

    const wraperCont = {
        position: "absolute",
        top: "0",
        width: "0",
        zIndex: "1",
        height: "90%",
        background: "rgba(0, 0, 0, 0.69)",
        transition: "width 0.4s ease-in-out"
    }

    function onMouseOvered(e) {
        document.getElementById(itemId).style.width = "100%"
        document.getElementById(textAreaId).style.background = "#fac100";
        document.getElementById(textAreaId).style.color = "white";
        document.getElementById(backgrId).style.background = "#fac100";
    }

    function onMouseOuted(e) {
        document.getElementById(itemId).style.width = "0%";
        document.getElementById(textAreaId).style.background = "white";
        document.getElementById(textAreaId).style.color = "#a600ff";
        document.getElementById(backgrId).style.background = "white";
    }


    const [isShow, setIsShow] = useState(false);

    setTimeout(function () {
        setIsShow(true);
    }, 1000);

    return (
        <div>
            <Zoom opposite cascade when={isShow}>
                <div
                    id={backgrId}
                    onMouseOut={onMouseOuted}
                    onMouseOver={onMouseOvered}
                    style={containerStyle}>

                    <div id={itemId} style={wraperCont}></div>

                    <div style={imgContStyle}>
                        <img src={itemLink} alt="Img"/>
                    </div>

                    <div id={textAreaId} style={txtContStyle}>
                        <h1
                            style={{fontSize:"2rem", lineHeight: "0.8"}}
                        >{itemTitle}</h1>
                        <p>{itemDescription}</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default SingleAchievement;