import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiGraduationCapFill } from "react-icons/pi";
import { RiGroupFill } from "react-icons/ri";
import SidebarLink from "./SidebarLink";

const ResourcesLinks = () => {
    return (
        <div className="sideApps">
            <h4>Resources Links </h4>

            <SidebarLink to={"tutorials"} icon={PiGraduationCapFill} text="Tutorials" />
            <SidebarLink to={"graphic-design"} icon={RiGroupFill} text="Portfolio" />
            <SidebarLink to={"behance"} icon={FaBehanceSquare} text="Behance" />
            <SidebarLink to={"social-forum"} icon={IoChatbubblesOutline} text="Social Forum" />
        </div>
    );
};

export default ResourcesLinks;
