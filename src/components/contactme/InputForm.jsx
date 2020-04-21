import React from "react";


function InputForm() {
    let someError = ""

    function onMOver(e){
        e.target.style.color="white";
    }

    function onMOut(e){
        e.target.style.color="#FAC008"
    }

    return (
        <div>
            <p style={{color:"#ff5500"}}>{someError}</p>

            <form action="/">
                <div class="form-group">
                    <input type="text" maxLength="50" class="form-control" id="idFName" placeholder="First Name" />
                </div>

                <div class="form-group">
                    <input type="text" maxLength="50" class="form-control" id="idLName" placeholder="Last Name" />
                </div>

                <div class="form-group">
                    <input type="email" maxLength="50" class="form-control" id="idEmail" placeholder="Email" />
                </div>

                <div class="form-group">
                    <textarea type="text" rows="5" class="form-control" id="idSubject" placeholder="Subject" />
                </div>

                <br></br>

                <div class="form-group">
                    <button onMouseOver={onMOver} onMouseOut={onMOut} type="submit" class="btn btn-outline-warning">Send Message</button>
                </div>


            </form></div>
    )
}

export default InputForm;