import React from "react";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Left/Sidebar";
const BodyComp = () => {
    return (
        <div className="pageBody">
            <Sidebar />
            <RightSide />
        </div>
    );
};

export default BodyComp;
