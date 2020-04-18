import React, { useState } from "react";
import Skill from "./Skill";
import skills from "./skillsList"

function Skills() {

    const [skillStyle, setSkillStyle] = useState({
        display: "none",
        alignSelf: "stretch",
        flex: "1 0 500px",
        padding: "2%",
    });

    const [backgr, setBackgr] = useState("linear-gradient(0deg, rgba(199,161,219,1) 0%, rgba(228,201,242,1) 15%, rgba(244,244,244,1) 100%)")

    const skillStyle2 = {
        // display: "none",
        alignSelf: "stretch",
        flex: "1 0 500px",
        padding: "2%",
    };

    function onButtonClick(e) {
        if(e.target.innerHTML=="Read More"){
            setSkillStyle(prevValue => {
                return {
                    ...prevValue,
                    display: "initial"
                }
            });

            setBackgr("#f4f4f4")
            e.target.innerHTML = "Read Less";
        } else {
            setSkillStyle(prevValue => {
                return {
                    ...prevValue,
                    display: "none"
                }
            });

            setBackgr("linear-gradient(0deg, rgba(199,161,219,1) 0%, rgba(228,201,242,1) 15%, rgba(244,244,244,1) 100%)");
            e.target.innerHTML = "Read More";
        }
        
    }

    return (
        <div
            className="skills-container">
            <p><strong>My Skills</strong></p>

            <div className="skills-list">
                {skills.map((value, index) => {
                    if (index <= 3) {
                        return (
                            <Skill
                                contStyle={skillStyle2}
                                singleSkill={value} />
                        )
                    } else {
                        return (
                            <Skill
                                contStyle={skillStyle}
                                singleSkill={value} />
                        )
                    }

                })}

            </div>

            <div className="read-more-button" style={{background:backgr}}>
                <button onClick={onButtonClick} type="button" class="btn btn-warning">Read More</button>
            </div>
        </div>
    )
}

export default Skills;