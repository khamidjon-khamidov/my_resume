import React from "react";

function AdditionalInfo() {

    const algoStyle = {
        borderLeft: "1px solid #878A8D",
        borderRight: "1px solid #878A8D"
    }

    return (
        <div className="additional-info-container">
            <div className="additional-info">


                {/* this is Android Development content */}

                <div className="item-container-second">
                    <div className="additional-item-container">

                        <div className="additional-img-container">
                            <span className="additional-img">
                                <i className="fab fa-android" />
                            </span>
                        </div>


                        <div className="addtional-item-info">
                            <p className="additional-item1"><strong>Android Development</strong></p>
                            <br />
                            <p className="additional-item2">Projects</p>
                        </div>
                    </div>
                </div>

                {/* this is Algorithms content */}
                <div className="item-container-second">
                    <div style={algoStyle} className="additional-item-container">
                        <div className="additional-img-container">
                            <span className="additional-img">
                                <i className="fas fa-code" />
                            </span>
                        </div>


                        <div className="addtional-item-info">
                            <p className="additional-item1"><strong>Algorithms</strong></p>
                            <br />
                            <p className="additional-item2">Contestant</p>
                        </div>
                    </div>
                </div>


                {/* this is Web Development content */}

                <div className="item-container-second">
                    <div className="additional-item-container">
                        <div className="additional-img-container">
                            <span className="additional-img">
                                <i className="fab fa-internet-explorer"></i>
                            </span>
                        </div>


                        <div className="addtional-item-info">
                            <p className="additional-item1"><strong>Web Development</strong></p>
                            <br />
                            <p className="additional-item2">Full Stack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo;