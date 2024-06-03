import React from "react";
import { FaBars } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import SidebarLink from "./SidebarLink";

const Allapps = () => {
    return (
        <div className="sideApps">
            <h4>Apps</h4>
            <SidebarLink to="/" icon={FaBars} text="All Apps" />
            <SidebarLink to="/apps/all-updates" icon={RxUpdate} text="All Updates" />
        </div>
    );
};

export default Allapps;
