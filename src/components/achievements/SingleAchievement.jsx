import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";

function SingleAchievement(props) {

    const {itemId, itemTitle, itemDescription, itemLink} = props.item;

    let textAreaId = itemId + "txtarea";
    let backgrId = itemId + "backgr";

    const imgContStyle = {
        width: "100%",
        background: "white"
    }

    const txtContStyle = {
        background: "white",
        lineHeight: "0",
        padding: "2% 0 0 1%",
        marginBottom: "0",
        borderStyle: "groove none none none",
        borderColor: "#fac100",
        color: "#a600ff",
        fontSize: "1.5rem",
        fontFamily: "'Hi Melody', cursive",
        bottom: "0",
        // zIndex: "2",
        transition: "background 0.4s ease-in-out"
    }

    const wraperCont = {
        position: "absolute",
        top: "0",
        width: "0",
        marginBottom: "0",
        zIndex: "1",
        height: "100%",
        background: "rgba(0, 0, 0, 0.69)",
        transition: "width 0.4s ease-in-out"
    }

    function onMouseOvered(e) {
        document.getElementById(itemId).style.width = "100%"
        document.getElementById(textAreaId).style.background = "#fac100";
        document.getElementById(itemId+"contBackgr").style.background="#fac100";
        document.getElementById(textAreaId).style.color = "white";
        document.getElementById(backgrId).style.background = "#fac100";
    }

    function onMouseOuted(e) {
        document.getElementById(itemId).style.width = "0%";
        document.getElementById(textAreaId).style.background = "white";
        document.getElementById(itemId+"contBackgr").style.background="white";
        document.getElementById(textAreaId).style.color = "#a600ff";
        document.getElementById(backgrId).style.background = "white";
    }


    return (
        <div className="single-achievement-cont-style" id={itemId+"contBackgr"}>
            <Zoom opposite cascade>
                <div
                    id={backgrId}
                    onMouseOut={onMouseOuted}
                    onMouseOver={onMouseOvered}
                    >

                    <div id={itemId} style={wraperCont}></div>

                    <div style={imgContStyle}>
                        <img style={{width:"100%"}} src={itemLink} alt="Img"/>
                    </div>

                    <div id={textAreaId} style={txtContStyle}>
                        <h1
                            style={{fontSize:"2rem", lineHeight: "1"}}
                        >{itemTitle}</h1>
                        <p style={{marginBottom:"2px", lineHeight:"1"}}>{itemDescription}</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default SingleAchievement;