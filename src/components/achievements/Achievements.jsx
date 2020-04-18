import React from "react";
import TabLayout from "./TabLayout";

function Achievements() {

    return (
        <div className="achievements-container">
            <div className="achieve-title" style={{ textAlign: "center" }}>
                <p>Achievements</p>
            </div>

            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-android-tab" data-toggle="tab" href="#nav-android" role="tab" aria-controls="nav-android" aria-selected="true">Android</a>
                    <a class="nav-item nav-link" id="nav-algorithm-tab" data-toggle="tab" href="#nav-algorithm" role="tab" aria-controls="nav-algorithm" aria-selected="false">Algorithms</a>
                    <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false">Others</a>
                </div>
            </nav>
            
            <div class="tab-content" id="nav-tabContent">
                {/* android */}
                <div class="tab-pane fade show active" id="nav-android" role="tabpanel" aria-labelledby="nav-android-tab">
                    Android
                </div>

                {/* algorithm */}
                <div class="tab-pane fade" id="nav-algorithm" role="tabpanel" aria-labelledby="nav-algorithm-tab">
                    Algorithm
                </div>

                {/* others */}
                <div class="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="nav-others-tab">
                    Others
                </div>
            </div>
            {/* <TabLayout/> */}
        </div>
    )
}

export default Achievements;
















