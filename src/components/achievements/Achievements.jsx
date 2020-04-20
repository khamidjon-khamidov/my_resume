import React from "react";
import Achievement from "./Achievement";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import honorsList from "./honorsList";

function Achievements() {
    const [android, algorithms, others] = honorsList;

    return (
        <div className="achievements-container">
            <div className="achieve-title" style={{ textAlign: "center" }}>
                <p>Achievements</p>
            </div>

            <Tabs className="myClass" id="noanim-tab-example">

                <Tab eventKey={1} title="Android">
                    <Achievement
                        itemsCollection={android} />
                </Tab>


                <Tab eventKey={2} title="Algorithm">
                    <Achievement
                        itemsCollection={algorithms}
                    />
                </Tab>

                <Tab eventKey={3} title="Others">
                    <Achievement
                        itemsCollection={others} />
                </Tab>
            </Tabs>

        </div>
    )
}

export default Achievements;
















