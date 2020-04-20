import React from "react";
import SingleAchievement from "./SingleAchievement";

function Achievement(props) {
    let singleItemCollection = props.itemsCollection.hList;

    const containerStyle = {
        marginTop: "50px",
        display: "flex",
        flexWrap: "wrap",
        // alignContent: "space-around",
        justifyContent: "space-around",
        marginBottom: "50px",
    }

    return (
        <div style={containerStyle}>

            {singleItemCollection.map((value, index) => {
                return (
                    <SingleAchievement
                        item={value}
                        key={value.itemId+"mykey"} />
                )
            })}

        </div>
    )
}

export default Achievement;