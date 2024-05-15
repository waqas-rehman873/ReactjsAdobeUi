import React from "react";
import RightSide from "./RightSide/RightSide";
import Sidebar from "./Left/Sidebar";
const BodyComp = () => {
    return (
        <section className="pageBody">
            <Sidebar />
            <RightSide />
        </section>
    );
};

export default BodyComp;
