import React from "react";
import { FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";

const Fonts = () => {
    return (
        <div className="sideApps">
            <h4>Fonts</h4>
            <Link to={"photography"}>
                <FiBox size={16} />
                <h5>Manage Fonts</h5>
            </Link>
        </div>
    );
};

export default Fonts;
