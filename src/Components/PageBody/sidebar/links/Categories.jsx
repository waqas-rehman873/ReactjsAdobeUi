import React from "react";
import { IoIosReverseCamera } from "react-icons/io";
import { IoBrush } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="sideApps">
            <h4>Categories</h4>
            <Link to="/adobe-ads">
                <IoIosReverseCamera size={16} />
                <h5>Photography</h5>
            </Link>
            <Link to="/graphic-design">
                <SiTaichigraphics size={16} />
                <h5>Graphic Design </h5>
            </Link>
            <Link to="after-effects">
                <MdOutlineVideoLibrary size={16} />
                <h5>Video </h5>
            </Link>
            <Link to={"illustration"}>
                <IoBrush size={16} />
                <h5>Illustration</h5>
            </Link>
            <Link to={"ui/ux"}>
                <MdOutlineVideoLibrary size={16} />
                <h5>UI/UX </h5>
            </Link>
            <Link to={"3d/ar"}>
                <MdOutlineVideoLibrary size={16} />
                <h5>3D/AR </h5>
            </Link>
        </div>
    );
};

export default Categories;
