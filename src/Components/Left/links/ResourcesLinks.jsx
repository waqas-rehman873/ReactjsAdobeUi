import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiGraduationCapFill } from "react-icons/pi";
import { RiGroupFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ResourcesLinks = () => {
    return (
        <div className="sideApps">
            <h4>Resources Links </h4>
            <Link to={"tutorials"}>
                <PiGraduationCapFill size={16} />
                <h5>Tutorials</h5>
            </Link>
            <Link to={"graphic-design"}>
                <RiGroupFill size={16} />
                <h5>Portfolio </h5>
            </Link>

            <Link to={"behance"}>
                <FaBehanceSquare size={16} />
                <h5>Behance</h5>
            </Link>
            <Link to={"social-forum"}>
                <IoChatbubblesOutline size={16} />
                <h5>Social Forum </h5>
            </Link>
        </div>
    );
};

export default ResourcesLinks;
