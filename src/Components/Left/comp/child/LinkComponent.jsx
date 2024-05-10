import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ to, icon, text }) => {
    return (
        <Link to={to}>
            {icon}
            <h5>{text}</h5>
        </Link>
    );
};

export default LinkComponent;
