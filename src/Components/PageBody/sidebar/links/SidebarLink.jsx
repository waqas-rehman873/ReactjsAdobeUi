import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, text }) => {
    return (
        <Link to={to} className="sidebar-link">
            <Icon size={16} />
            <h5>{text}</h5>
        </Link>
    );
};

export default SidebarLink;
