import React from "react";

function DownloadBtn() {

    const btnStyle = {
        borderRadius: "20px",
        color: "#a600ff",
        fontSize: "1rem",
        fontFamily: "'Comic Neue', serif",
        padding: "10px 20px"
    }

    return (
        <div className="btn-style">
            <button
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