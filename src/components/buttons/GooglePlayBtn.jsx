import React from "react";

function GooglePlayBtn() {

    const btnStyle = {
        whiteSpace: "pre-wrap",
        borderRadius: "20px",
        fontSize: "1rem",
        fontFamily: "'Comic Neue', serif",
        padding: "10px 20px",
        color: "white"
    }

    const downloadGooglePlay = () => {
        const googlePlayLink = "";
        window.open(googlePlayLink, "_blank")
    }

    return (
        <div className="btn-style google-btn">
            <button
                onClick={downloadGooglePlay}
                style={btnStyle}
                type="button"
                className="btn btn-warning"
            >
                <i className="fab fa-google-play"></i> Google Play
            </button>
        </div>
    )
}

export default GooglePlayBtn;