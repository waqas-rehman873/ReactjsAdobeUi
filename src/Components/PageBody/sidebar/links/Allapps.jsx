import React from "react";
import { FaBars } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const Allapps = () => {
    return (
        <div className="sideApps">
            <h4>Apps</h4>
            <Link to="/">
                <FaBars size={16} />
                <h5>All Apps</h5>
            </Link>
            <Link to="/apps/all-updates">
                <RxUpdate size={16} />
                <h5>All Updates</h5>
            </Link>
        </div>
    );
};

export default Allapps;
