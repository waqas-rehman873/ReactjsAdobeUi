// Categories.jsx
import React from "react";
import { IoIosReverseCamera } from "react-icons/io";
import { IoBrush } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import SidebarLink from "./SidebarLink";

const Categories = () => {
    return (
        <div className="sideApps">
            <h4>Categories</h4>
            <SidebarLink to="/apps/adobe" icon={IoIosReverseCamera} text="Photography" />
            <SidebarLink to="/apps/graphic" icon={SiTaichigraphics} text="Graphic Design" />
            <SidebarLink to="/apps/after-effects" icon={MdOutlineVideoLibrary} text="Video" />
            <SidebarLink to="/apps/appsPlan" icon={IoBrush} text="Illustration" />
            <SidebarLink to="/apps/software" icon={MdOutlineVideoLibrary} text="UI/UX" />
            <SidebarLink to="/3d/ar" icon={MdOutlineVideoLibrary} text="3D/AR" />
        </div>
    );
};

export default Categories;
