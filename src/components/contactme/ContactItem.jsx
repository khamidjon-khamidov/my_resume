import React from "react";

function ContactItem(props) {
    const itemId = props.itemId;
    const itemIcon = props.itemIcon;
    const itemTitle = props.itemTitle;
    const itemDes = props.itemDes;

    const contStyle = {
        verticalAlign: "center",
        marginTop: "20px",
    }

    const leftStyle = {
        width: "50px",
        height: "50px",
        borderStyle: "solid",
        border: "1px solid #fac100",
        background: "#fac100",
        borderRadius: "50px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        transition: "background .8s ease-in-out"
        // boxSizing:"border-box"
    }

    const rightStyle = {
        padding: "0 2%",
        width: "80%",
        fontSize: "1.5rem",
        display: "inline-block",
        lineHeight: "0.3",
        fontFamily: "'Hi Melody', cursive"
    }

    function onMOut() {
        document.getElementById(itemId + "icon").style.color = "white";
        document.getElementById(itemId + "cont").style.background = "#fac100";
    }

    function onMOver() {
        document.getElementById(itemId + "icon").style.color = "#fac100";
        document.getElementById(itemId + "cont").style.background = "white";

    }

    return (
        <div
            onMouseOver={onMOver}
            onMouseOut={onMOut}
            style={contStyle}
            className="contactme_item_single"
        >

            <div id={itemId + "cont"} style={leftStyle}>
                <span><i id={itemId + "icon"} className={itemIcon} /></span>
            </div>

            <div style={rightStyle}>
                <h3 style={{ color: "#4D4A49" }}>{itemTitle}</h3>
                <p style={{ color: "#a600ff" }}>{itemDes}</p>
            </div>
        </div>
    )
}

export default ContactItem;