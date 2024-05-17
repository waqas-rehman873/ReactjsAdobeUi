import React from "react";
import Sidebar from "./sidebar/Sidebar";
// import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
const BodyComp = () => {
    return (
        <section className="pageBody">
            <Sidebar />
            <Outlet />
        </section>
    );
};

export default BodyComp;
