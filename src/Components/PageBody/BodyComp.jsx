import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main/Main";
const BodyComp = () => {
    return (
        <section className="pageBody">
            <Sidebar />
            <Main />
        </section>
    );
};

export default BodyComp;
