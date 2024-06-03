import React from "react";
import { FiBox } from "react-icons/fi";
import SidebarLink from "./SidebarLink";

const Fonts = () => {
    return (
        <div className="sideApps">
            <h4>Fonts</h4>
            <SidebarLink to={"photography"} icon={FiBox} text="Manage Fonts" />
        </div>
    );
};

export default Fonts;
