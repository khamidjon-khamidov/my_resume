import React from "react"

function Social() {

    const iconStyle = {
        display: "block",
        // background: "grey"
    }

    const onSocialClick = link => {
        window.open(link, "_blank")
    }

    return (
        <div className="home-social">
            <span onClick={()=>onSocialClick("https://github.com/SomeoneAndNoone")} style={iconStyle}><i className="home-social-icon fab fa-github"></i></span>
            <span onClick={()=>onSocialClick("https://www.facebook.com/khamidjon.khamidov")} style={iconStyle}><i className="home-social-icon fab fa-facebook-f"></i></span>
            <span onClick={()=>onSocialClick("https://www.linkedin.com/in/hamidjon-hamidov-a31128194/")} style={iconStyle}><i className="home-social-icon fab fa-linkedin-in"></i></span>
            <span onClick={()=>onSocialClick("https://web.telegram.org/#/im?p=@work_smard")} style={iconStyle}><i className="home-social-icon fab fa-telegram"></i></span>
        </div>
    )
}

export default Social;