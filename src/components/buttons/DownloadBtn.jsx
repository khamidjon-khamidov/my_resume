import React from "react";

function DownloadBtn(props) {

    const btnStyle = {
        borderRadius: "20px",
        color: "#a600ff",
        fontSize: "1rem",
        fontFamily: "'Comic Neue', serif",
        padding: "10px 20px"
    }

    const downloadCV = () => {
        window.location.href = props.cv_link;
    }

    return (
        <div className="btn-style">
            <button
                onClick={downloadCV}
                style={btnStyle}
                type="button"
                className="btn btn-outline-warning"
            >
            <i className="fas fa-download" /> Download CV
             </button>
        </div>
    );
}

export default DownloadBtn;