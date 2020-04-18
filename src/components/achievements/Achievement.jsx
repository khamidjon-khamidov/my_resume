import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";

function Achievement() {

    const [isShow, setIsShow] = useState(false);
    const [cardStyle, setCardStyle] = useState({
        display: "initial",
        width: "400px",
        height: "500px",
        marginBottom: "50px"
    });


    const imgStyle = {
        width: "400px"
        // height: "300px",
        // width: "200px"
    }

    function handleClick() {
        if (isShow) {
            setIsShow(false);
            setCardStyle(prevValue => {
                return {
                    ...prevValue,
                    display: "none"
                }
            })
        } else {
            setIsShow(true);
            setCardStyle(prevValue => {
                return {
                    ...prevValue,
                    width: "20%",
                    display: "initial"
                }
            })
        }
    }

    return (
        <div>
            <button style={{ display: "block" }} onClick={handleClick}>SomeButton</button>

            <Zoom left cascade opposite when={isShow}>
                <div style={cardStyle} class="card">
                    <img style={imgStyle} src="./img/ha1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>


                <div style={cardStyle} class="card">
                    <img style={imgStyle} src="./img/ha1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </Zoom>

            {/* <Zoom bottom cascade opposite when={isShow}> */}
            {/* <div style={cardStyle} class="card">
                    <img style={imgStyle} src="./img/ha1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div> */}

            {/* </Zoom> */}

        </div>
    )
}

export default Achievement;