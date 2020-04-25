import React from "react";
import Zoom from 'react-reveal/Zoom';

function PostItem(props) {

    const { postId, postDescription, postLink } = props.postItem

    const contStyle = {
        verticalAlign: "middle",
        textAlign: "center",
        position: "relative",
        WebkitBoxShadow: "0px 0px 5px 2px rgba(0,0,0,0.75)",
        MozBoxShadow: "0px 0px 5px 2px rgba(0,0,0,0.75)",
        boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.75)",
        background: "white",
        marginTop: "8px"
    }


    const imgStyle = {
        width: "100%",
    }

    const txtContStyle = {
        position: "absolute",
        bottom: "0",
        width: "100%",
        margin: "0",
        background: "rgba(5, 5, 5, .59)",
        color: "#fac100",
        padding: "1.9%",
        textAlign: "center"
    }

    return (
        <Zoom bottom cascade>
            <div style={contStyle}>
                <img style={imgStyle} src={postLink} alt="img" />
                <p style={txtContStyle}>{postDescription}</p>
            </div>
        </Zoom>
    )
}

export default PostItem;