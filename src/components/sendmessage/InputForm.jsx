import React, { useState, useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import axios from "axios";
import urls from "../../urls"

function InputForm() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [sendInfo, setSendInfo] = useState("");
    const [someError, setSomeError] = useState("");
    const [message, setMessage] = useState({
        token: "",
        text: ""
    });

    useEffect(() => {
        if (sendInfo === "Sending...") {
            axios.get(urls.BASE_SERVER_URL + "/sendMessage/" + encodeURIComponent(message.token) + "/" + encodeURIComponent(message.text))
                .then(res => {
                    console.log(res.data)
                    if (res.status !== 404 && res.data.ok===true){
                        setSendInfo("Sent successfully!");
                    } else {
                        setSendInfo("Sending failed. Please, try again!")
                    }
                })
                .catch(err => { 
                    console.log(err)
                    setSendInfo("Sending failed. Please, try again!")
                })
        }
    }, [sendInfo])

    useEffect(() => {
        if(sendInfo==="Sending..."){
            setIsDisabled(true)
            document.getElementById("sendingInfo").style.color = "#fac100"
        } else if(sendInfo==="Sent successfully!"){
            setIsDisabled(false)
            document.getElementById("sendingInfo").style.color = "green"
            // setMessage({
            //     token: "",
            //     text: ""
            // })
        } else if(sendInfo==="Sending failed. Please, try again!"){
            setIsDisabled(false)
            document.getElementById("sendingInfo").style.color = "#ED510A"
        }
    }, [sendInfo])

    const sendInfoRef = useRef(sendInfo);
    sendInfoRef.current = sendInfo

    function onMessageChange(event) {
        const { name, value } = event.target;
        if (message.token !== "" && message.text !== "") {
            setSomeError("")
        }
        setMessage(prevVal => (
            {
                ...prevVal,
                [name]: value
            }
        ))
    }

    function onMOver(e) {
        e.target.style.color = "white";
    }

    function onMOut(e) {
        e.target.style.color = "#FAC008"
    }

    function onSendBtnClick() {
        if (sendInfo === "Sending...") { return; }
        if (message.token === "" || message.text === "") {
            setSomeError("All feilds must be filled!")
            setSendInfo("")
            setIsDisabled(false)
            return
        }
    //    setMesg(encodeURIComponent(message.token + " " + message.text));
        setSendInfo("Sending...");
        setTimeout(function () {
            if (sendInfoRef.current === "Sending...") {
                setSendInfo("Sending failed. Please, try again!")
            }
        }, 10000)
    }

    return (
        <div style={{margin:"50px"}}>
            <p style={{ color: "#ff5500" }}>{someError}</p>

            <form>

                <div className="form-group">
                    <input onChange={onMessageChange} name="token" value={message.token} type="text" maxLength="1000" className="form-control" id="idToken" placeholder="Auth-Token" />
                </div>

                <div className="form-group">
                    <textarea onChange={onMessageChange} name="text" value={message.text} type="text" rows="5" className="form-control" id="idText" placeholder="Text" />
                </div>

                <br></br>

                <p id="sendingInfo" className="send-btn-contact">{sendInfo}</p>

                <div className="form-group send-btn-contact">
                    <Button disabled={isDisabled} color="primary" variant="contained" onClick={onSendBtnClick} onMouseOver={onMOver} onMouseOut={onMOut}>
                        Send
                    </Button>
                </div>


            </form>
        </div>
    )
}

export default InputForm