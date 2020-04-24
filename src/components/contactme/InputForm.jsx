import React, { useState, useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import axios from "axios";

function InputForm() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [msg, setMsg] = useState("");
    const [sendInfo, setSendInfo] = useState("");
    const [someError, setSomeError] = useState("");
    const [message, setMessage] = useState({
        fName: "",
        lName: "",
        email: "",
        text: ""
    });

    useEffect(() => {
        if (sendInfo === "Sending...") {
            axios.get("http://localhost:9000/someone/sendMessage/" + msg)
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
            setMsg("")
            setMessage({
                fName: "",
                lName: "",
                email: "",
                text: ""
            })
        } else if(sendInfo==="Sending failed. Please, try again!"){
            setIsDisabled(false)
            document.getElementById("sendingInfo").style.color = "#ED510A"
        }
    }, [sendInfo])

    const sendInfoRef = useRef(sendInfo);
    sendInfoRef.current = sendInfo

    function onMessageChange(event) {
        const { name, value } = event.target;
        if (message.fName !== "" && message.lName !== "" && message.email !== "" && message.text !== "") {
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
        if (message.fName === "" || message.lName === "" || message.email === "" || message.text === "") {
            setSomeError("All feilds must be filled!")
            setSendInfo("")
            setIsDisabled(false)
            return
        }

        setMsg(escape("Name: " + message.fName + " \nSurname: " + message.lName + " \nEmail: " + message.email + "  \nText: " + message.text + " \nPlatform: " + window.navigator.platform));
        setSendInfo("Sending...");
        setTimeout(function () {
            if (sendInfoRef.current === "Sending...") {
                setSendInfo("Sending failed. Please, try again!")
            }
        }, 10000)
    }

    return (
        <div>
            <p style={{ color: "#ff5500" }}>{someError}</p>

            <form>
                <div className="form-group">
                    <input onChange={onMessageChange} name="fName" value={message.fName} type="text" maxLength="50" className="form-control" id="idFName" placeholder="First Name" />
                </div>

                <div className="form-group">
                    <input onChange={onMessageChange} name="lName" value={message.lName} type="text" maxLength="50" className="form-control" id="idLName" placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <input onChange={onMessageChange} name="email" value={message.email} type="email" maxLength="50" className="form-control" id="idEmail" placeholder="Email" />
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

export default InputForm;