import React from "react";

function DownloadBtn() {

    const btnStyle = {
        borderRadius: "20px",
        color: "#a600ff",
        fontSize: "1rem",
        fontFamily: "'Comic Neue', serif",
        padding: "10px 20px"
    }

    const downloadCV = () => {
        window.location.href = "https://firebasestorage.googleapis.com/v0/b/who-is-khamidjon.appspot.com/o/cv%2FCV_Programming.docx?alt=media&token=0ab13a3a-9ad4-4741-a44d-700bb211cad9";
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