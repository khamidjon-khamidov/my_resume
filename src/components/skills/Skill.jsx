import React, { useState } from "react";
import Roll from 'react-reveal/Roll';

function Skill(props) {
    const { name, percentage, list } = props.singleSkill;

    const nameStyle = {
        textAlign: "center",
        color: "#ff5500",
        fontSize: "1.7rem",
        paddingBottom: "3%",
        fontFamily: "san-serif"
    };

    const progressCont = {
        width: "100%",
        height: "100%"
    }

    const progressStyle = {
        width: percentage + "%"
    };

    const columnStyle = {
        width: "33.333%",
        padding: "2%",
        textAlign: "left",
        verticalAlign: "top",
        display: "inline-block",
        lineHeight: "0"
    }

    const singleItemStyle = {
        textAlign: "center",
        fontFamily: "'Hi Melody', cursive",
        color: "#a600ff",
        fontSize: "1.3rem",
        lineHeight: "0.9"
    }

    const col1List = list.filter((_, index) => (index % 3 === 0));
    const col2List = list.filter((_, index) => (index % 3 === 1));
    const col3List = list.filter((_, index) => (index % 3 === 2));

    function itemMouseOut(e) {
        e.target.style.color = "#a600ff"
    }

    function itemMouseOver(e) {
        e.target.style.color = "#fac100"
    }

    return (
        <Roll bottom cascade>
            <div
                style={props.contStyle}
                className="single-skill-cont"
            >
                <h1 style={nameStyle}>{name}</h1>

                {/* progressbar */}
                <div style={{progressCont}} className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={progressStyle}></div>
                </div>

                {/* column 1 */}
                <div style={columnStyle}>
                    {col1List.map(value => {
                        return (
                            <p
                                onMouseOver={itemMouseOver}
                                onMouseOut={itemMouseOut}
                                style={singleItemStyle}
                            >
                                {value}
                            </p>
                        )
                    })}
                </div>

                {/* column 2 */}
                <div style={columnStyle}>
                    {col2List.map(value =>
                        (
                            <p
                                onMouseOver={itemMouseOver}
                                onMouseOut={itemMouseOut}
                                style={singleItemStyle}
                            >
                                {value}
                            </p>
                        )
                    )}
                </div>

                {/* column 3 */}
                <div style={columnStyle}>
                    {col3List.map(value => (
                        <p
                            onMouseOver={itemMouseOver}
                            onMouseOut={itemMouseOut}
                            style={singleItemStyle}
                        >
                            {value}
                        </p>
                    )
                    )}
                </div>
            </div>
        </Roll>
    )
}

export default Skill;



























