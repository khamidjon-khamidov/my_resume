import React from "react"

function Social() {

    const iconStyle = {
        display: "block",
        // background: "grey"
    }

    return (
        <div className="home-social">
            <span style={iconStyle}><i className="home-social-icon fab fa-github"></i></span>
            <span style={iconStyle}><i className="home-social-icon fab fa-facebook-f"></i></span>
            <span style={iconStyle}><i className="home-social-icon fab fa-linkedin-in"></i></span>
            <span style={iconStyle}><i className="home-social-icon fab fa-telegram"></i></span>
        </div>
    )
}

export default Social;